
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



def diagram2cell(diagram,master,cell):
   mat = diagram2cellMatrix(diagram)(master,cell)
   diagram =larApply(mat)(diagram)  
   (V1,CV1),(V2,CV2) = master,diagram
   n1,n2 = len(V1), len(V2)
   #verifico i vertici comuni
   V, CV1, CV2, n12 = vertexSieve(master,diagram)
   common = range(n1-n12, n1)
   rangeN = range(n1,n1-n12+n2)
   
   def checkInclusion(V,cell,rangeN):
      verts = [V[v] for v in cell]
      minim, maxim = min(verts), max(verts)
      cell += [v for v in rangeN if (
         minim[0] <= V[v][0] and minim[1] <= V[v][1] and minim[2] <= V[v][2] 
         and 
         V[v][0] <= maxim[0] and V[v][1] <= maxim[1] and V[v][2] <= maxim[2] 
         )]
      return cell
      
   CV1 = [checkInclusion(V,c,rangeN) 
         if set(c).intersection(common) != set() else c
          for c in CV1]
   CV = [c for k,c in enumerate(CV1) if k != cell] + CV2
   master = V, CV
   return master