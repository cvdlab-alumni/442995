from larcc import *

brown=Color4f([(0.36),(0.25),(0.2)])
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

#funzione che permette di colorare celle
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

finestra6 = assemblyDiagramInit([3,1,7])([[0.05,0.35,0.05],[.3],[.1,.2975,.05,.2975,.05,.2975,.1]])
contenitore6=assemblyDiagramInit([1,2,1])([[0.9],[.1,.2],[1.1925]])

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

porta_nuova=assemblyDiagramInit([1,3,3])([[.3],[.15,.8,.15],[.4,1.65,.15]]) # da usare 2 volte
empty_porta_nuova=[4];

hpc = SKEL_1(STRUCT(MKPOLS(porta_nuova)))
hpc = cellNumbering (porta_nuova,hpc)(range(len(porta_nuova[1])),CYAN,.5)
VIEW(hpc)
#DRAW(porta4)

#######################################################################################################################
#Creo la struttura di un piano del palazzo
master = assemblyDiagramInit([11,11,2])([[.3,3,.1,1,.1,.5,.1,2,.1,2.5,.3],[.3,1.5,.1,2.5,.1,.5,.1,.5,.1,3,.3],[.3,2.7]])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,.5)
#VIEW(hpc)

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,.5)
#VIEW(hpc)

#inserisco i diagrammi che creano lo spazio per inserire le porte e le finestre
toRemove = [[],[],[],[],[],[],[],[],[],[],[],[],[]]
toMerge = [60,75,26,44,56,131,160,7,134,36,19,167,3] 
toMerge = [67,91,27,51,63,171,207,7,175,43,19,219,3] 
diagrams = [assemblyDiagramInit([3,1,2])([[.1,1,.1],[.3],[2.2,.5]]), #entrata
			assemblyDiagramInit([1,2,2])([[.3],[.25,1.25],[2.2,.5]]),  #porta corridoio
			assemblyDiagramInit([3,1,2])([[1.5,.8,.7],[.3],[2.2,.5]]),  #porta camera da letto comunic bagno
			assemblyDiagramInit([1,3,2])([[.3],[.85,.8,.85],[2.2,.5]]),  #porta camera da letto comunic corrid
			assemblyDiagramInit([1,3,2])([[.3],[1.5,.8,.7],[2.2,.5]]),  #porta cucina
			assemblyDiagramInit([3,1,2])([[.75,1,.75],[.3],[2.2,.5]]),  #porta bagno cameretta
			assemblyDiagramInit([3,1,2])([[.85,.8,.85],[.3],[2.2,.5]]), #porta cameretta
			assemblyDiagramInit([1,5,3])([[.3],[.45,1.1,.2,1.1,.45],[1,1.4,.3]]),
			assemblyDiagramInit([3,1,3])([[0.8,1.4,0.8],[.3],[1,1.4,.3]]),
			assemblyDiagramInit([3,1,3])([[0.15,1,1],[.3],[1,1.4,.3]]),
			assemblyDiagramInit([1,3,3])([[.3],[0.2,1.6,0.4],[1,1.4,.3]]),
			assemblyDiagramInit([5,1,3])([[.45,1.1,.2,1.1,.45],[.3],[1,1.4,.3]]),
			assemblyDiagramInit([1,3,3])([[.3],[0.6,1.8,0.6],[1.6,.8,.3]])] 


input_list = [[toMerge[n],toRemove[n],diagrams[n]] for n in range(len(toMerge))]
master = mergingNumberingElimination(master,input_list)

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,.5)
#VIEW(hpc)

diagram_porta_balcone = assemblyDiagramInit([3,1,1])([[.2,1,.2],[.3],[1]])  #porta del balcone
toMerge=294
toMerge2=293
master=diagram2cell(diagram_porta_balcone,master,toMerge)
master=diagram2cell(diagram_porta_balcone,master,toMerge2)

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,.5)
VIEW(hpc) #l'appartamento

emptyChain =[271,22,61,104,148,158,190,106,150,170,192,108,130,152,172,194,25,65,29,27,29,33,35,37,77,98,120,75,73,71,69,67,94,92,90,112,126,138,136,134,160,158,156,163,205,203,201,199,197,168,128,
			94,92,114,136,138,116,63,296,328,267,283,334,337,304,291,277,261,254,233,239,246,313,319]
#######################################################################################################

finestra = assemblyDiagramInit([6,1,7])([[0.05,0.35,0.05,0.05,0.35,0.05],[.3],[.1,.2975,.05,.2975,.05,.2975,.1]])
contenitore=assemblyDiagramInit([1,2,1])([[0.9],[.1,.2],[1.1925]])
contenitore=diagram2cell(finestra,contenitore,0)

emptyfinestra=[13,34,11,32,9,30,0]

hpc = SKEL_1(STRUCT(MKPOLS(contenitore)))
hpc = cellNumbering (contenitore,hpc)(range(len(contenitore[1])),CYAN,.5)
#VIEW(hpc)
#DRAW(finestra)

finestra3 = assemblyDiagramInit([3,1,3])([[0.05,0.8,0.05],[.3],[.1,1.2,.1]]) #finestra balcone
contenitore3=assemblyDiagramInit([1,2,1])([[0.9],[.1,.2],[1.4]])
contenitore3=diagram2cell(finestra3,contenitore3,0)

finestra6 = assemblyDiagramInit([3,1,7])([[0.05,0.35,0.05],[.3],[.1,.2975,.05,.2975,.05,.2975,.1]])
contenitore6=assemblyDiagramInit([1,2,1])([[0.9],[.1,.2],[1.1925]])
contenitore6=diagram2cell(finestra6,contenitore6,0)

hpc = SKEL_1(STRUCT(MKPOLS(contenitore6)))
hpc = cellNumbering (contenitore6,hpc)(range(len(contenitore6[1])),CYAN,.5)
emptyfinestra6=[13,11,9,0]
VIEW(hpc)
#DRAW(finestra3)

porta2=assemblyDiagramInit([3,3,5])([[.15,.8,.15,],[.05,.2,.05],[.2,.45,.15,1.2,.2]]) #porta verso alto
conten_porta_2=assemblyDiagramInit([1,2,1])([[1.1],[.1,.2],[2.2]])
conten_porta_2=diagram2cell(porta2,conten_porta_2,1);
emptyporta2=[0,19,29,17,27];


''' Exports a model (V,FV) into an .obj format file at 'filePath' '''
def objExporter((V,FV), filePath):
	out_file = open(filePath,"w")
	out_file.write("# List of Vertices:\n")
	for v in V:
		out_file.write("v")
		for c in v:
			out_file.write(" " + str(c))
		out_file.write("\n")
	out_file.write("# Face Definitions:\n")
	for f in FV:
		out_file.write("f")
		for v in f:
			out_file.write(" " + str(v+1))
		out_file.write("\n")
	out_file.close()

def export(master, emptyChain,filePath):
	solidCV = [cell for k,cell in enumerate(master[1]) if not (k in emptyChain)]
	exteriorCV =  [cell for k,cell in enumerate(master[1]) if k in emptyChain]
	exteriorCV += exteriorCells(master)
	CV = solidCV + exteriorCV
	V = master[0]
	FV = [f for f in larFacets((V,CV),3,len(exteriorCV))[1] if len(f) >= 4]
	BF = boundaryCells(solidCV,FV)
	boundaryFaces = [FV[face] for face in BF]
	B_Rep = V,boundaryFaces
	verts, triangles = quads2tria(B_Rep)
	B_Rep = V,boundaryFaces
	objExporter((verts,triangles),filePath)


export(master,emptyChain,"app.obj")
#export(contenitore6,emptyfinestra6,"finestra_6.obj")

#export(conten_porta_2,emptyporta2,"porta.obj")
#export(porta_nuova,empty_porta_nuova,"porta_salone.obj")
#VIEW(EXPLODE(1.1,1.1,1.1)(MKPOLS((verts, triangles))))
#VIEW(STRUCT(MKPOLS((verts, triangles))))
