from larcc import *

#brown=Color4f([(0.4),(0.2),(0)])
brown=Color4f([(0.36),(0.25),(0.2)])
#sienna=Color4f([(0.627),(0.321),(0.176)])
sienna=Color4f([(0.65),(0.50),(0.39)])
sandy=Color4f([(1),(0.82),(0.60)])

def comp(x,y) :
	n1,n2,n3 = x;
	m1,m2,m3 = y;
	return m1-n1;

def mergingNumberingElimination(master,diagram_list) :
	diagram_list.sort(comp)
	for i in range(len(diagram_list)) :
		V,CV = master
		max_val = len(CV)-1 #salvo il numero di cella massimo
		master = diagram2cell(diagram_list[i][2],master,diagram_list[i][0])
		V,CV = master 
		for j in range(len(diagram_list[i][1])) :
			diagram_list[i][1][j] += max_val #aggiorno i toRemove
		master = V,[cell for k,cell in enumerate(CV) if not (k in diagram_list[i][1])]
	return master 

def creaRampa (lung) :
	grad2d = MKPOL([[[0,0],[0,1.5],[1.5,1.5]],[[1,2,3]],None])
	grad3d = MAP([S1,S3,S2])(PROD([grad2d,Q(8)]))
	rampa=STRUCT([grad3d,T([1,3])([1.5,1.5])]*lung)
	return rampa

def creaBaseSupporto (lung):
	supp2d = MKPOL([[[0,0],[1.5*lung,0],[1.5*lung,1.5*lung]],[[1,2,3]],None])
	supp3d = MAP([S1,S3,S2])(PROD([supp2d,Q(8)]))
	return supp3d

#funziona che permette di colorare celle
def colorLar(color, master,element):
	for i in element:
		master[i]=COLOR(color)(master[i])
	return master
#funzioni che rende trasparenti le celle indicate
def transparLar(master,element):
	for i in element:
		master[i]=MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(master[i])
	return master

DRAW = COMP([VIEW,STRUCT,MKPOLS])


##############################################################################################################################
#Creo le finestre ed i relativi diagrammi per l'inserimento
finestra = assemblyDiagramInit([6,1,7])([[0.05,0.35,0.05,0.05,0.35,0.05],[.3],[.1,.2975,.05,.2975,.05,.2975,.1]])
contenitore=assemblyDiagramInit([1,2,1])([[0.9],[.1,.2],[1.1925]])
#DRAW(finestra)

finestra2=assemblyDiagramInit([1,6,7])([[.3],[0.05,0.35,0.05,0.05,0.35,0.05],[.1,.2975,.05,.2975,.05,.2975,.1]])
contenitore2=assemblyDiagramInit([2,1,1])([[.1,.2],[.9],[1.1925]])
#DRAW(finestra2)

finestra3 = assemblyDiagramInit([3,1,3])([[0.05,0.8,0.05],[.3],[.1,1.2,.1]]) #finestra balcone
contenitore3=assemblyDiagramInit([1,2,1])([[0.9],[.1,.2],[1.4]])
#DRAW(finestra3)

finestra4 = assemblyDiagramInit([1,3,3])([[.3],[0.05,0.8,0.05],[.1,1.2,.1]])
contenitore4=assemblyDiagramInit([2,1,1])([[.1,.2],[0.9],[1.4]])
#DRAW(finestra4)

finestra5=assemblyDiagramInit([1,6,3])([[.3],[0.05,0.35,0.05,0.05,0.35,0.05],[.1,.9925,.1]])
#DRAW(finestra5)

##############################################################################################################
#Creo le porte ed i relativi diagrammi per l'inserimento

porta=assemblyDiagramInit([1,6,3])([[.3],[.15,.8,.15,.15,.8,.15],[.4,1.65,.15]]) #portasalone
conten_porta=assemblyDiagramInit([2,1,1])([[.1,.2],[2.2],[2.2]])
#DRAW(porta)

porta2=assemblyDiagramInit([3,3,5])([[.15,.8,.15,],[.05,.2,.05],[.2,.45,.15,1.2,.2]]) #porta verso alto
V,CV=porta2
toRemove=[18,28,16,26]
porta2 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
conten_porta_2=assemblyDiagramInit([1,2,1])([[1.1],[.1,.2],[2.2]])
#DRAW(porta2)


porta3=assemblyDiagramInit([3,3,5])([[.05,.20,.05],[.15,.8,.15],[.2,.45,.15,1.2,.2]]) #porta verso sinistra
V,CV=porta3
toRemove=[8,38,6,36]
porta3 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
conten_porta_3=assemblyDiagramInit([2,1,1])([[.2,.1],[1.1],[2.2]])
#DRAW(porta3)


porta4=assemblyDiagramInit([6,1,3])([[.1,.35,.05,.05,.35,.1],[.3],[.2,1.8,.2]]) # da usare 2 volte
conten_porta_4=assemblyDiagramInit([1,2,1])([[1],[.1,.2],[2.2]])
#DRAW(porta4)

#######################################################################################################################
#Creo la struttura di un piano del palazzo
master = assemblyDiagramInit([11,11,2])([[.3,3,.1,1,.1,.5,.1,2,.1,2.5,.3],[.3,1.5,.1,2.5,.1,.5,.1,.5,.1,3,.3],[.3,2.7]])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
#VIEW(hpc)

toRemove=[25,69,113,135,157,179,71,73,115,137,159,203,205,183,161,139,117,29,201,181,29,33,35,37,39,41,85,107,129,173,217,215,213,75,77,79,81,83,105,125,103,211,209,169,165,143,121,99,167,147,123,101,145]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

#inserisco i diagrammi che creano lo spazio per inserire le porte e le finestre
toRemove = [[],[],[],[],[],[],[],[],[],[],[],[],[]]
toMerge = [60,75,26,44,56,131,160,7,134,36,19,167,3] 
diagrams = [assemblyDiagramInit([3,1,2])([[.1,1,.1],[.3],[2.2,.5]]), #entrata
			assemblyDiagramInit([1,2,2])([[.3],[.25,1.25],[2.2,.5]]),  #porta corridoio
			assemblyDiagramInit([3,1,2])([[1.5,.8,.7],[.3],[2.2,.5]]),  #porta camera da letto comunic bagno
			assemblyDiagramInit([1,3,2])([[.3],[.85,.8,.85],[2.2,.5]]),  #porta camera da letto comunic corrid
			assemblyDiagramInit([1,3,2])([[.3],[1.5,.8,.7],[2.2,.5]]),  #porta cucina
			assemblyDiagramInit([3,1,2])([[.75,1,.75],[.3],[2.2,.5]]),  #porta bagno cameretta
			assemblyDiagramInit([3,1,2])([[.85,.8,.85],[.3],[2.2,.5]]), #finestre
			assemblyDiagramInit([1,5,3])([[.3],[.45,1.1,.2,1.1,.45],[1,1.4,.3]]),
			assemblyDiagramInit([3,1,3])([[0.8,1.4,0.8],[.3],[1,1.4,.3]]),
			assemblyDiagramInit([3,1,3])([[0.15,1,1],[.3],[1,1.4,.3]]),
			assemblyDiagramInit([1,3,3])([[.3],[0.2,1.6,0.4],[1,1.4,.3]]),
			assemblyDiagramInit([5,1,3])([[.45,1.1,.2,1.1,.45],[.3],[1,1.4,.3]]),
			assemblyDiagramInit([1,3,3])([[.3],[0.6,1.8,0.6],[1.6,.8,.3]])] 

input_list = [[toMerge[n],toRemove[n],diagrams[n]] for n in range(len(toMerge))]
master = mergingNumberingElimination(master,input_list)
diagram_porta_balcone = assemblyDiagramInit([3,1,1])([[.2,1,.2],[.3],[1]])  #porta del balcone
toMerge=242
toMerge2=241
master=diagram2cell(diagram_porta_balcone,master,toMerge)
master=diagram2cell(diagram_porta_balcone,master,toMerge2)

###########################################################################
#inserisco i contenitori delle porte e delle finestre
toRemove = [[1],[1],[1],[1],[0],[0],[0],[0],
			[0],[0],[0],[0],[1],[1],[0],[0]]
toMerge = [202,181,187,239,252,261,267,276,
			215,194,209,244,231,225,282,285] 
diagrams = [contenitore,
			contenitore,
			contenitore,
			contenitore3,
			contenitore4,
			contenitore2,
			contenitore2,
			contenitore2,
			conten_porta,
			conten_porta_2,
			conten_porta_2,
			conten_porta_2,
			conten_porta_3,
			conten_porta_3,
			conten_porta_4,
			conten_porta_4] 

input_list = [[toMerge[n],toRemove[n],diagrams[n]] for n in range(len(toMerge))]
master = mergingNumberingElimination(master,input_list)

#Inserisco le porte e le finestre
toRemove = [[],[],[],[],[],[],[],[],
			[],[],[],[],[],[],[],[],[]]
toMerge = [283,286,285,278,276,274,275,273,
			281,213,284,282,277,279,280,272,271] 
diagrams = [finestra,
			finestra,
			finestra,
			finestra3,
			finestra5,
			finestra2,
			finestra2,
			finestra5,
			porta,
			porta2,
			porta2,
			porta2,
			porta2,
			porta3,
			porta3,
			porta4,
			porta4]

input_list = [[toMerge[n],toRemove[n],diagrams[n]] for n in range(len(toMerge))]
master = mergingNumberingElimination(master,input_list)

#coloro le celle delle porte e delle finestre
master=MKPOLS(master)
master=transparLar(master,[582,632,641,752,761,770,779,407,428,405,426,403,424,282,303,280,301,278,299,324,345,322,343,320,341,734,743,658,679,656,677,654,675,700,721,
					698,719,696,717,632,641,482,491])
master=colorLar(brown,master,[581,580,583,586,585,584,581,578,579,749,753,756,759,762,765,764,763,760,754,757,751,748,755,758,783,780,771,768,774,777,782,767,773,776,
					766,769,778,781,772,775,750,630,636,639,642,645,644,638,635,629,628,631,634,637,640,643,732,735,738,741,744,747,746,745,739,740,737,731,730,733,
					736,739,742,745,633,652,659,666,673,680,683,651,665,672,686,650,657,664,671,678,685,649,663,670,684,648,655,662,669,676,683,647,661,668,682,646,
					653,660,667,674,681,694,701,700,715,722,729,693,707,714,728,692,699,706,713,720,727,691,705,712,726,690,704,711,725,689,703,710,724,688,695,702,
					709,716,723,687,708,697,718,
					401,408,415,422,429,436,400,414,421,435,399,406,413,420,427,434,398,412,419,433,397,404,411,418,432,396,410,417,431,395,402,409,416,430,425,423,
					276,275,274,273,272,271,270,283,281,279,277,290,289,288,287,286,285,284,297,296,295,294,293,292,291,304,302,300,298,311,310,309,308,307,306,305,
					318,317,316,315,314,313,312,325,323,321,319,332,331,330,329,328,327,326,339,338,337,336,335,334,333,346,344,342,340,353,352,351,350,349,348,347,
					368,363,358,379,376,371,394,389,384,367,362,357,375,393,388,383,366,361,356,378,374,370,392,387,382,365,360,355,373,391,386,381,364,359,354,377,372,369,390,385,380,
					451,462,477,446,459,472,441,454,467,450,445,440,458,476,471,466,449,444,439,461,457,453,475,470,465,448,443,438,456,474,469,464,447,442,437,460,455,452,473,468,463,
					480,483,486,489,492,495,479,485,488,494,493,490,487,484,481,478,
					788,793,798,801,806,809,814,819,824,787,792,797,805,813,818,823,786,791,796,800,804,808,812,817,822,785,790,795,803,811,816,821,784,789,794,799,802,807,810,815,820,
					601,612,627,596,609,622,591,604,617,600,595,590,608,626,621,616,599,594,589,611,607,603,625,620,615,598,593,588,606,624,619,614,597,592,587,610,605,602,623,618,613,
					541,554,569,544,559,572,549,564,577,540,553,568,558,548,563,576,539,552,567,543,557,571,547,562,575,538,551,556,546,561,574,537,550,565,542,555,570,545,560,573,566,
					500,513,528,503,518,531,508,523,536,499,512,527,517,507,522,535,478,511,526,502,516,530,506,521,534,497,510,525,515,505,520,533,496,509,524,501,514,529,504,519,532,498,
					79,78,176,175])


edificio=STRUCT(master)
#VIEW(edificio)

###########################################################################################
#Creo il balcone dell'appartamento
basebalcone1=CUBOID([1.2,5.2,0.3])
basebalcone2=CUBOID([4.5,1,0.3])

ringh_balc_1=COLOR(sienna)(CUBOID([.2,5.2,1.4]))
ringh_balc_2=COLOR(sienna)(CUBOID([1.2,.2,1.4]))
ringh_balc_3=COLOR(sienna)(CUBOID([4.5,.2,1.4]))
ringh_balc_4=COLOR(sienna)(CUBOID([.2,1.2,1.4]))

basebalcone=STRUCT([basebalcone1,T(2)(4.2)(basebalcone2),ringh_balc_1,ringh_balc_2,T(2)(5.2)(ringh_balc_3),T([1,2])([4.5,4.2])(ringh_balc_4)])

#VIEW(basebalcone)

#############################################################################################
#L'appartamento completo
appartamento=INSR(STRUCT)([edificio,T([1,2])([-1.2,4.8])(basebalcone)])
#VIEW(appartamento)

#Creo un appartamento speculare al primo
appartamento2=S(1)(-1)(appartamento)

appartamenti=COLOR(sandy)(STRUCT([appartamento,T(1)(20)(appartamento2)]))

##############################################################################################
#Creo la scala
supp=creaRampa(19)
ramp=creaBaseSupporto(19)
scala= COLOR(brown)(T([1,3])([-14.3,2.2])(STRUCT([supp,ramp])))
scala2=COLOR(brown)(T(3)(-28)(R([1,2])(PI)(scala)))
#VIEW(scala)
base_scala=CUBOID([2.4,1,0.15])
base_scala=COLOR(brown)(T([1,2,3])([6.8,-0.9,-2.69])(base_scala))
scalacompl=STRUCT([scala,scala2])
scalacompl=S([1,2,3])([0.15,0.1,0.1])(R([2,1])(PI/2)(scalacompl))
#VIEW(scalacompl)

##############################################################################################
#Creo il pavimento nell'atrio

pavimento=CUBOID([20,13,0.3])
pavimento_scala=T(1)(6.8)(CUBOID([1.2,3,0.3]))
pavimento_lati=CUBOID([5,3,0.3])
pavimento_lati_2=CUBOID([5.5,3,0.3])
quadrato=T([2,3])([3,0])(CUBOID([0.3,0.3,0.3]))
quadrato2=T(1)(19.7)(quadrato)
quadrato3=T([1,2,3])([5,0,0])(CUBOID([.3,0.3,.3]))
quadrato4=T(1)(9.2)(quadrato3)
quadrato5=T([1,2,3])([11,0,0])(CUBOID([1.6,1.6,.3]))

base_scala2=COLOR(sienna)(T([1,2,3])([6.8,-0.9,0])(CUBOID([2.4,1,0.3])))
pavimento=DIFFERENCE([pavimento,pavimento_lati, quadrato,quadrato2,quadrato3,quadrato4,quadrato5])
pavimento=COLOR(sienna)(DIFFERENCE([pavimento,T(1)(14.5)(pavimento_lati_2)]))
#Il pavimento per il piano terra
pavimento2=DIFFERENCE([pavimento,pavimento_lati,T(1)(14.5)(pavimento_lati_2), quadrato,quadrato2,quadrato3,quadrato4])
pavimento2=STRUCT([pavimento2,base_scala2])

#VIEW((pavimento))

##############################################################################################
#Creo le colonne portanti
colonnaport=T([2,3])([3,0.3])(CUBOID([0.3,0.3,2.7]))
colonneport=STRUCT([colonnaport,T(1)(5)]*2)
colonnaport_2=T([1,2,3])([14.2,3,0.3])(CUBOID([0.3,0.3,2.7]))
colonneport_2=STRUCT([colonnaport_2,T(1)(5.5)]*2)
colonnaport_3=T([1,2,3])([6.5,3,0.3])(CUBOID([0.3,0.3,2.7]))
colonnaport_4=T([1,3])([5,0.3])(CUBOID([0.3,0.3,2.7]))
colonnaport_5=T([1,3])([6.5,0.3])(CUBOID([0.3,0.3,2.7]))
colonnaport_6=T([1,3])([14.2,0.3])(CUBOID([0.3,0.3,2.7]))

##############################################################################################
#Creo le mura trasparenti nell'atrio di ogni piano

muro_corrid_1=T([2,3])([3,0.3])(CUBOID([0.3,2,2.7]))
muro_corrid_1 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(muro_corrid_1)

muro_corrid_2=STRUCT([muro_corrid_1,T(1)(19.7)]*2)

muro_corrid_3=T([1,2,3])([.3,3,0.3])(CUBOID([4.7,0.3,2.7]))
muro_corrid_3 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(muro_corrid_3)

muro_corrid_4=T([1,2,3])([14.5,3,0.3])(CUBOID([5.3,0.3,2.7]))
muro_corrid_4 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(muro_corrid_4)

muro_corrid_5=T([1,2,3])([5,.3,0.3])(CUBOID([0.3,2.7,2.7]))
muro_corrid_5 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(muro_corrid_5)

muro_corrid_6=STRUCT([muro_corrid_5,T(1)(1.5)]*2)

muro_corrid_7=STRUCT([muro_corrid_5,T(1)(9.2)]*2)

muro_corrid_8=T([1,3])([5.3,0.3])(CUBOID([1.2,0.3,2.7]))
muro_corrid_8 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(muro_corrid_8)

muro_corrid_9=T([1,3])([9.2,0.3])(CUBOID([1.8,0.3,2.7]))
muro_corrid_9 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(muro_corrid_9)

muro_corrid_10=T([1,3])([12.6,0.3])(CUBOID([1.6,0.3,2.7]))
muro_corrid_10 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(muro_corrid_10)


muri_corrid=INSR(STRUCT)([muro_corrid_1,muro_corrid_2,muro_corrid_3,muro_corrid_4,muro_corrid_6,muro_corrid_7,muro_corrid_8,muro_corrid_9,muro_corrid_10])
colonneport=COLOR(brown)(INSR(STRUCT)([colonneport,colonneport_2,colonnaport_3,colonnaport_4,colonnaport_5,colonnaport_6]))

########################################################################################################
#Creo l'ascensore
colonna_asc_x=CUBOID([0.1,0.1,2.7])
colonne_asc_x=STRUCT([colonna_asc_x,T(1)(1.5)]*2)
colonne_asc_y=COLOR(brown)(STRUCT([colonne_asc_x,T(2)(1.5)]*2))
parete_asc=T(1)(0.1)(CUBOID([1.4,0.1,2.7]))
parete_asc = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(parete_asc)
pareti_asc_x=STRUCT([parete_asc,T(2)(1.5)]*2)
parete_asc_y=T(2)(0.1)(CUBOID([0.1,1.4,2.7]))
spiraglio=CUBOID([0.1,0.02,2.7])
#VIEW(spiraglio)
parete_asc_y=COLOR(sienna)(DIFFERENCE([parete_asc_y,T(2)(0.8)(spiraglio)]))
parete_asc_y_2=T([1,2])([1.5,0.1])(CUBOID([0.1,1.4,2.7]))
parete_asc_y_2 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(parete_asc_y_2)
pareti_asc_y=STRUCT([parete_asc_y,parete_asc_y_2])
pareti_asc=STRUCT([pareti_asc_x,pareti_asc_y])
pavimento_asc=CUBOID([1.6,1.6,.1])
pavimenti_asc=COLOR(brown)(STRUCT([pavimento_asc,T(3)(2.7)]*2))

pulsantiera=COLOR(brown)(T([1,2,3])([1.5,1,1.25])(CUBOID([0.01,0.2,0.4])))
ascensore=INSR(STRUCT)([colonne_asc_y,pareti_asc,pavimenti_asc,pulsantiera])

spazio_ascensore=INSR(STRUCT)([colonne_asc_y,pareti_asc])
spazio_ascensore=R([2,1])(PI/2)(spazio_ascensore)
#VIEW(spazio_ascensore)

ascensore=R([2,1])(PI/2)(ascensore)
#VIEW(ascensore)
#creo il cavo che tiene l'ascensore
cavo_ascensore=COLOR(GRAY)(T([1,2,3])([11.8,.8,0.2])(CUBOID([.05,.05,3])))

######################################################################################################
#Inserisco le vetrate delle scale
vetrata_scale=T([1,2,3])([6.5,-0.6,-2.7])(CUBOID([0.3,0.7,5.7]))
vetrata_scale = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(vetrata_scale)

vetrata_scale2=T([1,2,3])([8.9,-0.6,-2.7])(CUBOID([0.3,0.7,5.7]))
vetrata_scale2 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(vetrata_scale2)

vetrata_scale3=T([1,2,3])([6.8,-0.9,-2.7])(CUBOID([2.1,0.2,5.5]))
vetrata_scale3 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(vetrata_scale3)

vetrate_scale=INSR(STRUCT)([vetrata_scale,vetrata_scale2,vetrata_scale3])

#######################################################################################################
#inserisco le colonne portanti delle scale
colonnaport=T([1,2,3])([6.5,-0.9,-2.7])(CUBOID([0.3,0.3,5.7]))
colonnaport2=T([1,2,3])([8.9,-0.9,-2.7])(CUBOID([0.3,0.3,5.7]))
colonneport2=COLOR(brown)(STRUCT([colonnaport,colonnaport2]))


#######################################################################################################
#Creo un piano dell'edificio in cui sono presenti le scale
piano_appartamento=INSR(STRUCT)([colonneport2,vetrate_scale, base_scala, T(2)(5)(appartamenti),colonneport, muri_corrid, T([1,2,3])([8,1.55,-0.2])(scalacompl),pavimento,T([1,2,3])([11,1.6,.2])(spazio_ascensore),cavo_ascensore])
#VIEW(piano_appartamento)

#######################################################################################################

pavimento_scala_2=T(1)(6.8)(CUBOID([2.4,3,0.3]))
pavimento=DIFFERENCE([pavimento,pavimento_scala_2])

#######################################################################################################
#creo un piano dell'edificio in cui non sono presenti le scale
colonnaport=T([1,2,3])([6.5,-0.9,-2.7])(CUBOID([0.3,0.3,2.7]))
colonnaport2=T([1,2,3])([8.9,-0.9,-2.7])(CUBOID([0.3,0.3,2.7]))
colonneport3=COLOR(brown)(STRUCT([colonnaport,colonnaport2]))
colonneport=DIFFERENCE([colonneport,colonneport3])
colonneport=COLOR(brown)(colonneport)


piano_appartamento2=INSR(STRUCT)([T(2)(5)(appartamenti),colonneport,COLOR(brown)(colonnaport_2), muri_corrid,COLOR(sienna)(pavimento),T([1,2,3])([11,1.6,.2])(spazio_ascensore),cavo_ascensore])

due_piani=STRUCT([T(3)(2.7)(piano_appartamento),piano_appartamento2])
#VIEW(due_piani)
#######################################################################################################
#Creo il piano terra

piano_base=INSR(STRUCT)([colonneport, muri_corrid,pavimento,T([1,2,3])([11,1.6,.2])(ascensore)])
#VIEW(piano_base)

n1=64 
n2 = 64

def dom(n):
 	return INTERVALS(1)(n) 

dom1D = dom(n1) 

# Utilizzo Bezier per creare l'entrata 
c0 = BEZIER(S1)([[0.24, 4.1], [0.77, 5.49], [2.21, 5.21], [2.63, 4.69]]) 
c1 = BEZIER(S1)([[5.21, 4.68], [4.85, 5.95], [2.92, 5.94], [2.63, 4.69]])
c2 =BEZIER (S1) ([[5.21, 4.68], [5.92, 5.35], [6.97, 5.22], [7.37, 4.17]])
c3 = BEZIER (S1) ([[0.24, 4.1], [7.37, 4.17]])

c000 = BEZIER(S1)([[0.24, 4.1,0], [0.77, 5.49,0], [2.21, 5.21,0], [2.63, 4.69,0]]) 
c111 = BEZIER(S1)([[5.21, 4.68,0], [4.85, 5.95,0], [2.92, 5.94,0], [2.63, 4.69,0]])
c222 =BEZIER (S1) ([[5.21, 4.68,0], [5.92, 5.35,0], [6.97, 5.22,0], [7.37, 4.17,0]])
c333 = BEZIER (S1) ([[0.24, 4.09,3], [4.22, 4.13,3], [5.78, 4.16,3], [7.37, 4.17,3]])

c00 = BEZIER(S1)([[0.24, 4.1,3], [0.77, 5.49,3], [2.21, 5.21,3], [2.63, 4.69,3]]) 
c11 = BEZIER(S1)([[5.21, 4.68,3], [4.85, 5.95,3], [2.92, 5.94,3], [2.63, 4.69,3]])
c22 =BEZIER (S1) ([[5.21, 4.68,3], [5.92, 5.35,3], [6.97, 5.22,3], [7.37, 4.17,3]])
c33 = BEZIER (S1) ([[0.24, 4.09,3], [4.22, 4.13,3], [5.78, 4.16,3], [7.37, 4.17,3]])

dom2D = PROD(AA(dom)([n2, 1]))

section = BEZIER(S2)([c00, c000])
s=MAP(section)(dom2D)
#VIEW(s)

section2 = BEZIER(S2)([c11, c111])
s2=MAP(section2)(dom2D)
#VIEW(s2)

section3 = BEZIER(S2)([c22, c222])
s3=MAP(section3)(dom2D)
#VIEW(s3)

section4 = BEZIER(S2)([c000, c333])
s4=MAP(section4)(dom2D)
#VIEW(s4)

section5 = BEZIER(S2)([c111, c333])
s5=MAP(section5)(dom2D)
#VIEW(s5)

section6 = BEZIER(S2)([c222, c333])
s6=MAP(section6)(dom2D)
#VIEW(s6)

profile0 = MAP(c0)(dom1D)
profile1 = MAP(c1)(dom1D)
profile2 = MAP(c2)(dom1D)
profile3 = MAP(c3)(dom1D)

pavimento_entrata=INSR(STRUCT)([profile0,profile1,profile2,profile3])
#VIEW(pavimento_entrata)

pavimento_entrata_2=T(3)(3)(pavimento_entrata)
#VIEW(pavimento_entrata_2)

entrata=S([1,2,3])([2.8,2.7,0.9])(INSR(STRUCT)([s2,s3,s,pavimento_entrata,pavimento_entrata_2]))
entrata = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(entrata)

muro_entrata_lato_1=COLOR(brown)(T(2)(3)(CUBOID([.3,10,3])))

muro_entrata_lato_2=T(1)(19.7)(muro_entrata_lato_1)

muri_entrata=STRUCT([muro_entrata_lato_1,muro_entrata_lato_2])

pavimento_2=COLOR(sienna)(T(2)(13)(CUBOID([20,5,0.3])))
#VIEW(pavimento_2)

soffitto_piano_terra=COLOR(brown)(T([2,3])([5,2.7])(CUBOID([20,12.2,0.3])))
#VIEW(entrata)

scala= T([1,3])([-14.3,2.2])(STRUCT([supp,ramp]))
#VIEW(scala)
scalacompl=scala
scalacompl=COLOR(brown)(S([1,2,3])([0.15,0.1,0.1])(R([2,1])(PI/2)(scalacompl)))

#creo le colonne portanti
colonnaport_piano_base=T([2,3])([13,0.3])(CUBOID([0.3,0.3,2.7]))
colonnaport_piano_base2=T([1,2,3])([19.7,13,0.3])(CUBOID([0.3,0.3,2.7]))
colonnaport_piano_base3=T([1,2,3])([6.5,-0.9,0])(CUBOID([0.3,0.3,3]))
colonnaport_piano_base4=T([1,2,3])([8.9,-0.9,0])(CUBOID([0.3,0.3,3]))
colonnaport_piano_base5=T([2,3])([5.3,0.3])(CUBOID([3,0.3,2.7]))
colonnaport_piano_base6=T([1,2,3])([17,5.3,0.3])(CUBOID([3,0.3,2.7]))
colonneport_piano_base=COLOR(brown)(STRUCT([colonnaport_piano_base,colonnaport_piano_base2, colonnaport_piano_base3,colonnaport_piano_base4,colonnaport_piano_base5,colonnaport_piano_base6]))

#creo le vetrate
vetrata_scale=T([1,2,3])([6.5,-0.9,0])(CUBOID([0.3,4,2.7]))
vetrata_scale = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(vetrata_scale)

vetrata_scale2=T([1,2,3])([8.9,-0.9,0])(CUBOID([0.3,1,2.7]))
vetrata_scale2 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(vetrata_scale2)

vetrata_scale3=T([1,2,3])([6.5,-0.9,0])(CUBOID([2.7,0.2,2.7]))
vetrata_scale3 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(vetrata_scale3)

vetrate_scale=INSR(STRUCT)([vetrata_scale,vetrata_scale2,vetrata_scale3])


muro=COLOR(brown)(T([1,2])([6.7, 8.5])(CUBOID([0.3,6,3])))
muro2=COLOR(brown)(T([1,2])([14, 8.5])(CUBOID([0.3,6,3])))


piano_base=INSR(STRUCT)([soffitto_piano_terra, muro,muro2,vetrate_scale, colonneport_piano_base, T([1,2,3])([8,1.55,-0.2])(scalacompl),colonneport, muri_corrid,COLOR(sienna)(pavimento2),T([1,2,3])([11,1.6,.2])(ascensore),T([1,2])([-0.50,1.8])(entrata),muri_entrata,pavimento_2])
######################################################################################################################################
#Creo l'edificio completo

piani_appartamento=T(3)(2.7)(STRUCT([due_piani,T(3)(5.4)]*3))
edificio_completo=STRUCT([piano_base,piani_appartamento])
VIEW(edificio_completo)
