#from larcc import *
from pyplasm import *
from scipy import *
sys.path.insert(0,'larcc_2\lar-cc-master\lib\py')
from larcc import *
from lar2psm import *
from boolean import *
from largrid import *
from mapper import *
from morph import *
from myfont import *
from simplexn import *
from architectural import *
from splines import *
from sysml import *

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
					500,513,528,503,518,531,508,523,536,499,512,527,517,507,522,535,478,511,526,502,516,530,506,521,534,497,510,525,515,505,520,533,496,509,524,501,514,529,504,519,532,498])


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
appartamento=COLOR(sandy)(INSR(STRUCT)([edificio,T([1,2])([-1.2,4.8])(basebalcone)]))
VIEW(appartamento)