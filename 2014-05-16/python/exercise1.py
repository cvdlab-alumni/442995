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

master=MKPOLS(master)
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
VIEW(appartamento)