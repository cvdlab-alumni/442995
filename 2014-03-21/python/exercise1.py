from pyplasm import *

#floor0

base=T([1,2])([9,0])(COLOR(GRAY)(PROD([Q(26),Q(26)])))

#creo i quadrati rossi che rappresentano le colonne
quadrato=T([1,2])([9,0])(COLOR(RED)(PROD([Q(1.5),Q(1.5)])));
quadrati_orizzontali=STRUCT([quadrato,T(1)(2.5)]*3+[T(1)(12),quadrato]+[T(1)(2.5),quadrato]*2)
quadrati_verticali=STRUCT([quadrati_orizzontali,T(2)(2.5)]*3+[T(2)(12),quadrati_orizzontali]+[T(2)(2.5),quadrati_orizzontali]*2)

#creo i quadrati bianchi 
quadrato_bianco=T([1,2,3])([10.5,1.5,0.1])(PROD([Q(3.5),Q(3.5)]));
quadrati_bianchi_orizzontali=STRUCT([quadrato_bianco,T(1)(19.5)]*2)
quadrati_bianchi_verticali=STRUCT([quadrati_bianchi_orizzontali,T(2)(19.5)]*2)

floor0=INSR(STRUCT) ([quadrati_bianchi_verticali, quadrati_verticali,base])
VIEW(floor0)

#############################################################
#floor1

base1=T([3])(-0.1)(COLOR(GRAY)(PROD([Q(47),Q(47)])))

#rappresentano i quattro edifici presenti sul tetto
edif=T([1,2])([10.5,10.5])(COLOR(RED)(PROD([Q(8),Q(8)])))
tetto_edif=T([1,2])([11,11])(PROD([Q(7),Q(7)]))
edif=STRUCT([edif,tetto_edif])
edif_orizzontali=STRUCT([edif,T(1)(15)]*2)
edif_verticali=T([3])(0.1)(STRUCT([edif_orizzontali,T(2)(15)]*2))

ponte_orizz=T([1,2])([11,11])(PROD([Q(7),Q(14.5)]))
ponti_orizz=STRUCT([ponte_orizz,T(1)(15)]*2)


ponte_vertic=T([1,2])([11,11])(PROD([Q(14.5),Q(7)]))
ponti_vertic=STRUCT([ponte_vertic,T(2)(15)]*2)

#creo una griglia
bas=GRID([47])
altezza=GRID([1.5,-44,1.5])
linee_orizzontali=PROD([bas,altezza])
linee_verticali=PROD([altezza,bas])
griglia=T([3])(0.1)(COLOR(RED)(STRUCT([linee_verticali,linee_orizzontali])))

floor1=INSR(STRUCT) ([griglia,edif_verticali,base1,ponti_vertic,ponti_orizz])

VIEW(floor1)