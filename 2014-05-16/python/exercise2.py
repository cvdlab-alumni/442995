from larcc import *

red=Color4f([(0.78),(0.04),(0.084)])


def creaRampa (lung) :
	grad2d = MKPOL([[[0,0],[0,1.5],[1.5,1.5]],[[1,2,3]],None])
	grad3d = MAP([S1,S3,S2])(PROD([grad2d,Q(8)]))
	rampa=STRUCT([grad3d,T([1,3])([1.5,1.5])]*lung)
	return rampa

def creaBaseSupporto (lung):
	supp2d = MKPOL([[[0,0],[1.5*lung,0],[1.5*lung,1.5*lung]],[[1,2,3]],None])
	supp3d = MAP([S1,S3,S2])(PROD([supp2d,Q(8)]))
	return supp3d


DRAW = COMP([VIEW,STRUCT,MKPOLS])

master = assemblyDiagramInit([11,11,2])([[.3,3,.1,1,.1,.5,.1,2,.1,2.5,.3],[.3,1.5,.1,2.5,.1,.5,.1,.5,.1,3,.3],[.3,2.7]])
V,CV = master

#DRAW(master)
hpc = SKEL_1(STRUCT(MKPOLS(master)))

toRemove=[25,69,113,135,157,179,71,73,115,137,159,203,205,183,161,139,117,29,201,181,29,33,35,37,39,41,85,107,129,173,217,215,213,75,77,79,81,83,105,125,103,211,209,169,165,143,121,99,167,147,123,101,145]

master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
V,CV=master

##########################################################################################
#creo i diagrammi utili a creare le porte
diagram = assemblyDiagramInit([3,1,2])([[.1,1,.1],[.3],[2.2,.5]])

toMerge=60

master = diagram2cell(diagram,master,toMerge)
V,CV=master

toRemove=[191]

master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
V,CV=master
diagram2=assemblyDiagramInit([1,3,2])([[.3],[1,2,1],[2.2,.5]])
toMerge=74
master = diagram2cell(diagram2,master,toMerge)

diagram3=assemblyDiagramInit([3,1,2])([[1.5,.8,.7],[.3],[2.2,.5]])
toMerge=26
master=diagram2cell(diagram3,master,toMerge)

diagram4=assemblyDiagramInit([1,3,2])([[.3],[.85,.8,.85],[2.2,.5]])
toMerge=43
master=diagram2cell(diagram4,master,toMerge)

diagram5=assemblyDiagramInit([1,3,2])([[.3],[1.5,.8,.7],[2.2,.5]])
toMerge=54
master=diagram2cell(diagram5,master,toMerge)

diagram6=assemblyDiagramInit([3,1,2])([[.75,1,.75],[.3],[2.2,.5]])
toMerge=126
master=diagram2cell(diagram6,master,toMerge)

diagram7=assemblyDiagramInit([3,1,2])([[.85,.8,.85],[.3],[2.2,.5]])
toMerge=154
master=diagram2cell(diagram7,master,toMerge)

V,CV=master
toRemove_porte=[196,220,214,202,190,208]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove_porte)]

###################################################################################################################################
#Creo i diagrammi utilizzati per creare le finestre

diagram_fines_1 = assemblyDiagramInit([2,1,3])([[1.15,0.9],[.3],[1,1.4,.3]])
toMerge=116
master=diagram2cell(diagram_fines_1,master,toMerge)

diagram_fines_2 = assemblyDiagramInit([2,1,3])([[0.7,1.35],[.3],[1,1.4,.3]])
toMerge=148
master=diagram2cell(diagram_fines_2,master,toMerge)

diagram_fines_3 = assemblyDiagramInit([1,5,3])([[.3],[.5,0.8,.2,.8,.5],[1,1.4,.3]])
toMerge=178
master=diagram2cell(diagram_fines_3,master,toMerge)

diagram_fines_4 = assemblyDiagramInit([1,5,3])([[.3],[.45,1.1,.2,1.1,.45],[1,1.4,.3]])
toMerge=7
master=diagram2cell(diagram_fines_4,master,toMerge)

diagram_fines_5 = assemblyDiagramInit([3,1,3])([[0.8,1.4,0.8],[.3],[1,1.4,.3]])
toMerge=126
master=diagram2cell(diagram_fines_5,master,toMerge)

diagram_fines_6 = assemblyDiagramInit([3,1,3])([[0.15,1,1],[.3],[1,1.4,.3]])
toMerge=34
master=diagram2cell(diagram_fines_6,master,toMerge)

diagram_fines_7 = assemblyDiagramInit([1,3,3])([[.3],[0.2,1.6,0.4],[1,1.4,.3]])
toMerge=18
master=diagram2cell(diagram_fines_7,master,toMerge)

diagram_fines_8 = assemblyDiagramInit([3,1,3])([[0.6,1.8,0.6],[.3],[1.6,.8,.3]])
toMerge=21
master=diagram2cell(diagram_fines_8,master,toMerge)

diagram_fines_9 = assemblyDiagramInit([5,1,3])([[.45,1.1,.2,1.1,.45],[.3],[1,1.4,.3]])
toMerge=153
master=diagram2cell(diagram_fines_9,master,toMerge)

diagram_fines_10 = assemblyDiagramInit([3,1,1])([[.2,1,.2],[.3],[1]])
toMerge=267
master=diagram2cell(diagram_fines_10,master,toMerge)

toMerge=266
master=diagram2cell(diagram_fines_10,master,toMerge)

diagram_fines_9 = assemblyDiagramInit([1,3,3])([[.3],[.6,1.8,0.6],[1.6,.8,.3]])
toMerge=3
master=diagram2cell(diagram_fines_9,master,toMerge)

#rimuovo le finestre

V,CV=master
toRemove_finestre=[309,239,245,270,263,300,303,254,288,294]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove_finestre)]


V,CV=master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,0.5)
#VIEW(hpc)

#Coloro le facce desiderate
master=MKPOLS(master)
master[109]=COLOR(BLACK)(master[109])
master[108]=COLOR(BLACK)(master[108])
master[4]=COLOR(BLACK)(master[4])
master[3]=COLOR(BLACK)(master[3])
master[15]=COLOR(BLACK)(master[15])
master[14]=COLOR(BLACK)(master[14])

edificio=STRUCT(master)
#VIEW(edificio)

###########################################################################################
#Creo il balcone dell'appartamento
basebalcone1=CUBOID([1.2,5.2,0.3])
basebalcone2=CUBOID([4.5,1,0.3])

ringh_balc_1=COLOR(GRAY)(CUBOID([.2,5.2,1.4]))
ringh_balc_2=COLOR(GRAY)(CUBOID([1.2,.2,1.4]))
ringh_balc_3=COLOR(GRAY)(CUBOID([4.5,.2,1.4]))
ringh_balc_4=COLOR(GRAY)(CUBOID([.2,1.2,1.4]))

basebalcone=STRUCT([basebalcone1,T(2)(4.2)(basebalcone2),ringh_balc_1,ringh_balc_2,T(2)(5.2)(ringh_balc_3),T([1,2])([4.5,4.2])(ringh_balc_4)])

#VIEW(basebalcone)

#############################################################################################
#L'appartamento completo
appartamento=STRUCT([edificio,T([1,2])([-1.2,4.8])(basebalcone)])
#VIEW(appartamento)

#Creo un appartamento speculare al primo
appartamento2=S(1)(-1)(appartamento)

appartamenti=STRUCT([appartamento,T(1)(20)(appartamento2)])

##############################################################################################
#Creo la scala
supp=creaRampa(19)
ramp=creaBaseSupporto(19)
scala= COLOR(BLACK)(T([1,3])([-14.3,2.2])(STRUCT([supp,ramp])))
scala2=COLOR(BLACK)(T(3)(-28)(R([1,2])(PI)(scala)))
#VIEW(scala)
base_scala=CUBOID([2.4,1,0.15])
base_scala=COLOR(GRAY)(T([1,2,3])([6.8,-0.9,-2.69])(base_scala))
scalacompl=STRUCT([scala,scala2])
scalacompl=S([1,2,3])([0.15,0.1,0.1])(R([2,1])(PI/2)(scalacompl))
#VIEW(scalacompl)

##############################################################################################
#Creo il pavimento nell'atrio

pavimento=CUBOID([20,13,0.3])
pavimento_scala=T(1)(6.8)(CUBOID([1.2,3,0.3]))
pavimento_lati=CUBOID([5,3,0.3])
pavimento_lati_2=CUBOID([5.5,3,0.3])
pavimento=DIFFERENCE([pavimento,pavimento_scala])
pavimento=DIFFERENCE([pavimento,pavimento_lati])
pavimento=COLOR(GRAY)(DIFFERENCE([pavimento,T(1)(14.5)(pavimento_lati_2)]))

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

muro_corrid_1=T([2,3])([3,0.3])(CUBOID([0.3,2.3,2.7]))
muro_corrid_1 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(muro_corrid_1)

muro_corrid_2=STRUCT([muro_corrid_1,T(1)(19.7)]*2)

muro_corrid_3=T([2,3])([3,0.3])(CUBOID([5.3,0.3,2.7]))
muro_corrid_3 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(muro_corrid_3)

muro_corrid_4=STRUCT([muro_corrid_3,T(1)(14.5)]*2)

muro_corrid_5=T([1,3])([5,0.3])(CUBOID([0.3,3.3,2.7]))
muro_corrid_5 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(muro_corrid_5)

muro_corrid_6=STRUCT([muro_corrid_5,T(1)(1.5)]*2)

muro_corrid_7=STRUCT([muro_corrid_5,T(1)(9.2)]*2)

muro_corrid_8=T([1,3])([5,0.3])(CUBOID([1.5,0.3,2.7]))
muro_corrid_8 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(muro_corrid_8)

muro_corrid_9=T([1,3])([9.2,0.3])(CUBOID([1.8,0.3,2.7]))
muro_corrid_9 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(muro_corrid_9)

muro_corrid_10=T([1,3])([12.6,0.3])(CUBOID([1.6,0.3,2.7]))
muro_corrid_10 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(muro_corrid_10)


muri_corrid=INSR(STRUCT)([muro_corrid_1,muro_corrid_2,muro_corrid_3,muro_corrid_4,muro_corrid_6,muro_corrid_7,muro_corrid_8,muro_corrid_9,muro_corrid_10])
colonneport=COLOR(BLACK)(INSR(STRUCT)([colonneport,colonneport_2,colonnaport_3,colonnaport_4,colonnaport_5,colonnaport_6]))

########################################################################################################
#Creo l'ascensore
colonna_asc_x=CUBOID([0.1,0.1,2.7])
colonne_asc_x=STRUCT([colonna_asc_x,T(1)(1.5)]*2)
colonne_asc_y=COLOR(BLACK)(STRUCT([colonne_asc_x,T(2)(1.5)]*2))
parete_asc=T(1)(0.1)(CUBOID([1.5,0.1,2.7]))
parete_asc = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(parete_asc)
pareti_asc_x=STRUCT([parete_asc,T(2)(1.5)]*2)
parete_asc_y=T(2)(0.1)(CUBOID([0.1,1.5,2.7]))
spiraglio=CUBOID([0.1,0.02,2.7])
#VIEW(spiraglio)
parete_asc_y=DIFFERENCE([parete_asc_y,T(2)(0.8)(spiraglio)])
parete_asc_y_2=T([1,2])([1.5,0.1])(CUBOID([0.1,1.5,2.7]))
parete_asc_y_2 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(parete_asc_y_2)
pareti_asc_y=STRUCT([parete_asc_y,parete_asc_y_2])
pareti_asc=STRUCT([pareti_asc_x,pareti_asc_y])
pavimento_asc=CUBOID([1.6,1.6,.1])
pavimenti_asc=COLOR(BLACK)(STRUCT([pavimento_asc,T(3)(2.7)]*2))
pulsanti=COLOR(BLACK)(T([1,2,3])([1.5,1,1.25])(CUBOID([0.01,0.2,0.4])))
ascensore=INSR(STRUCT)([colonne_asc_y,pareti_asc,pavimenti_asc,pulsanti])
ascensore=R([2,1])(PI/2)(ascensore)
#VIEW(ascensore)

######################################################################################################
#Inserisco le vetrate delle scale
vetrata_scale=T([1,2,3])([6.5,-0.9,-2.7])(CUBOID([0.3,4,5.7]))
vetrata_scale = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(vetrata_scale)

vetrata_scale2=T([1,2,3])([8.9,-0.9,-2.7])(CUBOID([0.3,1,5.7]))
vetrata_scale2 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(vetrata_scale2)

vetrata_scale3=T([1,2,3])([6.5,-0.9,-2.7])(CUBOID([2.7,0.2,5.7]))
vetrata_scale3 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(vetrata_scale3)

vetrate_scale=INSR(STRUCT)([vetrata_scale,vetrata_scale2,vetrata_scale3])

#######################################################################################################
#inserisco le colonne portanti delle scale
colonnaport=T([1,2,3])([6.5,-0.9,-2.7])(CUBOID([0.3,0.3,5.7]))
colonnaport2=T([1,2,3])([8.9,-0.9,-2.7])(CUBOID([0.3,0.3,5.7]))
colonneport=COLOR(BLACK)(STRUCT([colonnaport,colonnaport2]))


#######################################################################################################
#Creo un piano dell'edificio in cui sono presenti le scale
piano_appartamento=INSR(STRUCT)([colonneport,vetrate_scale, base_scala, T(2)(5)(appartamenti),colonneport, muri_corrid, T([1,2,3])([8,1.55,-0.2])(scalacompl),pavimento,T([1,2,3])([11,1.6,.2])(ascensore)])
#VIEW(piano_appartamento)

#######################################################################################################

pavimento_scala_2=T(1)(6.8)(CUBOID([2.4,3,0.3]))
pavimento=DIFFERENCE([pavimento,pavimento_scala_2])

#######################################################################################################
#creo un piano dell'edificio in cui non sono presenti le scale
colonnaport=T([1,2,3])([6.5,-0.9,-2.7])(CUBOID([0.3,0.3,2.7]))
colonnaport2=T([1,2,3])([8.9,-0.9,-2.7])(CUBOID([0.3,0.3,2.7]))
colonneport3=COLOR(BLACK)(STRUCT([colonnaport,colonnaport2]))
colonneport=DIFFERENCE([colonneport,colonneport3])
colonneport=COLOR(BLACK)(colonneport)


piano_appartamento2=INSR(STRUCT)([T(2)(5)(appartamenti),colonneport, muri_corrid,pavimento,T([1,2,3])([11,1.6,.2])(ascensore)])

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

entrata=S([1,2,3])([2.8,2.7,1])(INSR(STRUCT)([s2,s3,s,pavimento_entrata,pavimento_entrata_2]))
entrata = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(entrata)

muro_entrata_lato_1=T(2)(3)(CUBOID([.3,10,3]))
muro_entrata_lato_1 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(muro_entrata_lato_1)

muro_entrata_lato_2=T(1)(19.7)(muro_entrata_lato_1)

muri_entrata=STRUCT([muro_entrata_lato_1,muro_entrata_lato_2])

pavimento_2=COLOR(GRAY)(T(2)(13)(CUBOID([20,5,0.3])))

soffitto_piano_terra=COLOR(BLACK)(T([2,3])([5,2.7])(CUBOID([20,13,0.3])))
#VIEW(entrata)

scala= T([1,3])([-14.3,2.2])(STRUCT([supp,ramp]))
#VIEW(scala)
scalacompl=scala
scalacompl=COLOR(BLACK)(S([1,2,3])([0.15,0.1,0.1])(R([2,1])(PI/2)(scalacompl)))

#creo le colonne portanti
colonnaport_piano_base=T([2,3])([13,0.3])(CUBOID([0.3,0.3,2.7]))
colonnaport_piano_base2=T([1,2,3])([19.7,13,0.3])(CUBOID([0.3,0.3,2.7]))
colonneport_piano_base=COLOR(BLACK)(STRUCT([colonnaport_piano_base,colonnaport_piano_base2]))

#creo le vetrate
vetrata_scale=T([1,2,3])([6.5,-0.9,0])(CUBOID([0.3,4,2.7]))
vetrata_scale = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(vetrata_scale)

vetrata_scale2=T([1,2,3])([8.9,-0.9,0])(CUBOID([0.3,1,2.7]))
vetrata_scale2 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(vetrata_scale2)

vetrata_scale3=T([1,2,3])([6.5,-0.9,0])(CUBOID([2.7,0.2,2.7]))
vetrata_scale3 = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(vetrata_scale3)

vetrate_scale=INSR(STRUCT)([vetrata_scale,vetrata_scale2,vetrata_scale3])

piano_base=INSR(STRUCT)([vetrate_scale,soffitto_piano_terra, colonneport_piano_base, T([1,2,3])([8,1.55,-0.2])(scalacompl),colonneport, muri_corrid,pavimento,T([1,2,3])([11,1.6,.2])(ascensore),T([1,2])([-0.50,1.8])(entrata),muri_entrata,pavimento_2])

#VIEW(piano_base)

######################################################################################################################################
#Creo l'edificio completo

piani_appartamento=T(3)(2.7)(STRUCT([due_piani,T(3)(5.4)]*5))
edificio_completo=STRUCT([piano_base,piani_appartamento])
VIEW(edificio_completo)