def diagram2cell(diagram,master,cell):

   mat = diagram2cellMatrix(diagram)(master,cell)
   diagram =larApply(mat)(diagram)  
   
   #evito la ripetizione dei vertici
   mas = filter(lambda fa : len(filter(lambda fb: fa==fb,diagram[0]))==0,master[0])
   #oppure
   #diagram[0] = filter(lambda fa : len(filter(lambda fb: fa==fb,master[0]))==0,diagram[0])
   """
   # yet to finish coding
   V, CV1, CV2, n12 = vertexSieve(master,diagram)
   masterBoundaryFaces = boundaryOfChain(CV,FV)([cell])
   diagramBoundaryFaces = lar2boundaryFaces(CV,FV)
   """
   V = mas[0] + diagram[0]
   offset = len(master[0])
   CV = [c for k,c in enumerate(master[1]) if k != cell] + [
         [v+offset for v in c] for c in diagram[1]]
   master = V, CV
   return master