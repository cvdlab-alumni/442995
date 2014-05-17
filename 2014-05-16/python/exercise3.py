from larcc import *

#prende come parametri un diagramma, un master,una lista toRemove ed un elemento toMerge
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

#prende come parametri una lista di diagrammi, un master, una lista di lista di toRemove, una lista di toMerge
#scrivo nel toRemove i numeri delle celle di diagram che voglio rimuovere una volta inserito il diagram nel master
#(quindi scrivo i vertici di diagram da enumerare senza preoccuparmi del fatto delle nuove enumerazioni che avverranno
# una volta inserito diagram in master)
#la funziona calcola i nuovi numeri di celle e rimuove la cella o le celle desiderate.
#Questa funziona ripete il procedimento per tutti i diagram inseriti nella lista diagrams
def mergingNumberingElimination2(diagrams,master,toRemove,toMerge):

	for j in range(len(diagrams)):
		V,CV=master
		max=len(CV)-1
		master=diagram2cell(diagrams[j],master,toMerge[j])
		V,CV = master
    		for i in range(len(toRemove[j])):
    			toRemove[j][i]+=max
		master= V,[cell for k,cell in enumerate(CV) if not (k in toRemove[j])]
	return master

#############################################################################################################################

#Utilizzo la seconda funzione per risolvere il test 04

DRAW = COMP([VIEW,STRUCT,MKPOLS])

master = assemblyDiagramInit([5,5,2])([[.3,3.2,.1,5,.3],[.3,4,.1,2.9,.3],[.3,2.7]])
V,CV = master
#hpc = SKEL_1(STRUCT(MKPOLS(master)))
#hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,2)
toRemove = [13,33,17,37]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(master)
toMerge = 29
diagram = assemblyDiagramInit([3,1,2])([[2,1,2],[.3],[2.2,.5]])
V,CV = master
#hpc = SKEL_1(STRUCT(MKPOLS(master)))
#hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,2)
#VIEW(hpc)
#DRAW(master)
diagram2 = assemblyDiagramInit([5,1,3])([[1.5,0.9,.2,.9,1.5],[.3],[1,1.4,.3]])
V,CV=diagram2
#hpc = SKEL_1(STRUCT(MKPOLS(diagram2)))
#hpc = cellNumbering (diagram2,hpc)(range(len(CV)),CYAN,2)
#VIEW(hpc)
toRemove2 = [53,59]
toMerge2 = 34
#######################################################################
master=mergingNumberingElimination2([diagram,diagram2],master,[[2],[4,10]],[29,34])
########################################################################
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,2)
VIEW(hpc)
DRAW(master)