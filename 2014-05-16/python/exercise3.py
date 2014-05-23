from larcc import *

#VERSIONE NON DEFINITIVA
#prende come parametri un diagramma, un master,una lista toRemove ed un elemento toMerge
#Versione utilizzata per una singola istanza, non e' definitiva.
#Per ogni merge di un diagramma all'interno di un master, le celle del diagramma inserito,
#vengono enumerate a partire dal numero di cella massimo del master. Quindi prima di effettuare
#il merge salviamo il numero di cella massimo del master e sommiamo questo numero al numero di
#cella del diagramma che desideriamo cancellare.
#In questo modo otteniamo il beneficio di poter scegliere quale cella eliminare direttamente dal
#diagram.
#Versione parzialmente corretta in quanto serve un ordinamento preliminare della lista dei Merge, che
#evita problemi di enumerazione delle celle.

def mergingNumberingEliminationSingleInstance(diagram,master,toRemove,toMerge):
	V,CV=master
	max=len(CV)-1
	master=diagram2cell(diagram,master,toMerge)
	V,CV = master
    	for i in range(len(toRemove)):
    		toRemove[i]+=max
	master= V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
	return master
###########################################################################################################################

#VERSIONE DEFINITIVA
#Viene ordinata la lista di triple (toMerge,toRemove,diagrams) in maniere decrescente secondo il valore di toMerge.
#Per ogni tripla della lista, faccio il merge del diagram nella cella toMerge del master, utilizzando la tecnica descritta
#nella funziona sopra. In seguito al merge si rimuovono le celle interessate esattamente come la funziona sopra descritta.
#A questa funzione possiamo assegnare piu celle per il merge e per ogni diagramma mergiato in quella cella possiamo eliminare
#le celle desiderate.

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

#############################################################################################################################

#Utilizzo la seconda funzione per risolvere il test 04

DRAW = COMP([VIEW,STRUCT,MKPOLS])

master = assemblyDiagramInit([5,5,2])([[.3,3.2,.1,5,.3],[.3,4,.1,2.9,.3],[.3,2.7]])
V,CV = master

toRemove = [13,33,17,37]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(master)
#toMerge = 29
diagram = assemblyDiagramInit([3,1,2])([[2,1,2],[.3],[2.2,.5]])
V,CV = diagram
hpc = SKEL_1(STRUCT(MKPOLS(diagram)))
hpc = cellNumbering (diagram,hpc)(range(len(CV)),CYAN,2)
VIEW(hpc)


diagram2 = assemblyDiagramInit([5,1,3])([[1.5,0.9,.2,.9,1.5],[.3],[1,1.4,.3]])
V,CV=diagram2
hpc = SKEL_1(STRUCT(MKPOLS(diagram2)))
hpc = cellNumbering (diagram2,hpc)(range(len(CV)),CYAN,2)
VIEW(hpc)

V,CV=master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,2)
VIEW(hpc)
#toRemove2 = [53,59]
#toMerge2 = 34
##############################################################################################
#Ho commentato le parti che non sono piu necessarie del test 3 ed utilizzo la terza funzione creata
toMerge=[29,35]
toRemove=[[2],[4,10]]
diagrams=[diagram,diagram2]


input_list = [[toMerge[n],toRemove[n],diagrams[n]] for n in range(len(toMerge))]
master = mergingNumberingElimination(master,input_list)

###############################################################################################
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,2)
VIEW(hpc)
DRAW(master)