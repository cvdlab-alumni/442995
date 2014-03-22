from pyplasm import *

###################################################
#FACCIATA NORD


#creo colonna rossa in 2D
colonna_rossa=COLOR(RED)(PROD([Q(1.5),Q(10)]))
#rappresentano gli spazi in cui non sono presenti le colonne rosse per orizzontale
spazio=PROD([Q(1.0),Q(10)])

colonne_sinistra_rosse=STRUCT([colonna_rossa,T(1)(2.5)]*3)
spazi_sinistra=STRUCT([spazio,T(1)(2.5),]*2)

settore_sinistro=STRUCT([colonne_sinistra_rosse,T(1)(1.5)(spazi_sinistra)])
settore_destro=T(1)(19.5)(settore_sinistro)
settore_inferiore=T(1)(9) (STRUCT([settore_sinistro,settore_destro]))


colonna_primo_livello=COLOR(RED)(T([1,2])([7.5,10])(PROD([Q(29),Q(1.5)])))
spazio_primo_livello=T([1,2])([7.5,11.5])(PROD([Q(29),Q(1.5)]))

colonna_secondo_livello=COLOR(RED)(T([1,2])([6,13])(PROD([Q(32),Q(1.5)])))
spazio_secondo_livello=T([1,2])([6,14.5])(PROD([Q(32),Q(1.5)]))

colonna_terzo_livello=COLOR(RED)(T([1,2])([4.5,16])(PROD([Q(35),Q(1.5)])))
spazio_terzo_livello=T([1,2])([4.5,17.5])(PROD([Q(35),Q(1.5)]))

colonna_quarto_livello=COLOR(RED)(T([1,2])([3,19])(PROD([Q(38),Q(1.5)])))
spazio_quarto_livello=T([1,2])([3,20.5])(PROD([Q(38),Q(1.5)]))

colonna_quinto_livello=COLOR(RED)(T([1,2])([1.5,22])(PROD([Q(41),Q(1.5)])))
spazio_quinto_livello=T([1,2])([1.5,23.5])(PROD([Q(41),Q(1.5)]))

colonna_sesto_livello=COLOR(RED)(T(2)(25)(PROD([Q(44),Q(1.5)])))

edificio_alto_senza_porte=PROD([Q(8),Q(4)])
porta=PROD([Q(1),Q(2)])
edificio_alto_con_porte_uno=T([1,2])([10.5,26.5])(COLOR(RED)(DIFFERENCE([edificio_alto_senza_porte,T(1)(2)(porta),T(1)(5)(porta)])))
edificio_alto_con_porte_due=T([1,2])([25.5,26.5])(COLOR(RED)(DIFFERENCE([edificio_alto_senza_porte,T(1)(2)(porta),T(1)(5)(porta)])))
tetto_edificio=T([1,2])([10,30.5])(COLOR(RED)(PROD([Q(24),Q(1)])))
ed=STRUCT([edificio_alto_con_porte_uno,edificio_alto_con_porte_due,tetto_edificio])

north=INSR(STRUCT) ([edificio_alto_con_porte_uno, tetto_edificio, edificio_alto_con_porte_due, colonna_sesto_livello,colonna_quinto_livello,spazio_quinto_livello,COLOR(RED)(colonna_quarto_livello),spazio_quarto_livello,colonna_terzo_livello,spazio_terzo_livello,colonna_secondo_livello,spazio_secondo_livello,colonna_primo_livello,spazio_primo_livello,settore_inferiore])

#VIEW(north)

######################################################################################
#FACCIATA EST

colonna_rossa=COLOR(RED)(PROD([Q(1.5),Q(10)]))
spazio=PROD([Q(1.0),Q(10)])

colonne_sinistra_rosse=STRUCT([colonna_rossa,T(1)(2.5)]*3)
spazi_sinistra=STRUCT([spazio,T(1)(2.5),]*2)

settore_sinistro=STRUCT([colonne_sinistra_rosse,T(1)(1.5)(spazi_sinistra)])
settore_destro=T(1)(19.5)(settore_sinistro)
settore_inferiore=T(1)(9) (STRUCT([settore_sinistro,settore_destro]))


colonna_primo_livello=T([1,2])([7.5,10])(PROD([Q(29),Q(1.5)]))
spazio_primo_livello=COLOR(RED)(T([1,2])([7.5,11.5])(PROD([Q(29),Q(1.5)])))

colonna_secondo_livello=T([1,2])([6,13])(PROD([Q(32),Q(1.5)]))
spazio_secondo_livello=COLOR(RED)(T([1,2])([6,14.5])(PROD([Q(32),Q(1.5)])))

colonna_terzo_livello=T([1,2])([4.5,16])(PROD([Q(35),Q(1.5)]))
spazio_terzo_livello=COLOR(RED)(T([1,2])([4.5,17.5])(PROD([Q(35),Q(1.5)])))

colonna_quarto_livello=COLOR(WHITE)(T([1,2])([3,19])(PROD([Q(38),Q(1.5)])))
spazio_quarto_livello=COLOR(RED)(T([1,2])([3,20.5])(PROD([Q(38),Q(1.5)])))

colonna_quinto_livello=T([1,2])([1.5,22])(PROD([Q(41),Q(1.5)]))
spazio_quinto_livello=COLOR(RED)(T([1,2])([1.5,23.5])(PROD([Q(41),Q(1.5)])))

colonna_sesto_livello=T(2)(25)(PROD([Q(44),Q(1.5)]))

edificio_alto_senza_porte=PROD([Q(8),Q(4)])
porta=PROD([Q(1),Q(2)])
edificio_alto_con_porte_uno=T([1,2])([10.5,26.5])(COLOR(RED)(DIFFERENCE([edificio_alto_senza_porte,T(1)(2)(porta),T(1)(5)(porta)])))
edificio_alto_con_porte_due=T([1,2])([25.5,26.5])(COLOR(RED)(DIFFERENCE([edificio_alto_senza_porte,T(1)(2)(porta),T(1)(5)(porta)])))
tetto_edificio=T([1,2])([10,30.5])(COLOR(RED)(PROD([Q(24),Q(1)])))
ed=STRUCT([edificio_alto_con_porte_uno,edificio_alto_con_porte_due,tetto_edificio])

east=INSR(STRUCT) ([edificio_alto_con_porte_uno, tetto_edificio, edificio_alto_con_porte_due, colonna_sesto_livello,colonna_quinto_livello,spazio_quinto_livello,COLOR(RED)(colonna_quarto_livello),spazio_quarto_livello,colonna_terzo_livello,spazio_terzo_livello,colonna_secondo_livello,spazio_secondo_livello,colonna_primo_livello,spazio_primo_livello,settore_inferiore])

#VIEW(east)

###################################################
#FACCIATA SUD



colonna_rossa=COLOR(RED)(PROD([Q(1.5),Q(10)]))
spazio=PROD([Q(1.0),Q(10)])

colonne_sinistra_rosse=STRUCT([colonna_rossa,T(1)(2.5)]*3)
spazi_sinistra=STRUCT([spazio,T(1)(2.5),]*2)

settore_sinistro=STRUCT([colonne_sinistra_rosse,T(1)(1.5)(spazi_sinistra)])
settore_destro=T(1)(19.5)(settore_sinistro)
settore_inferiore=T(1)(9) (STRUCT([settore_sinistro,settore_destro]))


colonna_primo_livello=COLOR(RED)(T([1,2])([7.5,10])(PROD([Q(29),Q(1.5)])))
spazio_primo_livello=T([1,2])([7.5,11.5])(PROD([Q(29),Q(1.5)]))

colonna_secondo_livello=COLOR(RED)(T([1,2])([6,13])(PROD([Q(32),Q(1.5)])))
spazio_secondo_livello=T([1,2])([6,14.5])(PROD([Q(32),Q(1.5)]))

colonna_terzo_livello=COLOR(RED)(T([1,2])([4.5,16])(PROD([Q(35),Q(1.5)])))
spazio_terzo_livello=T([1,2])([4.5,17.5])(PROD([Q(35),Q(1.5)]))

colonna_quarto_livello=COLOR(RED)(T([1,2])([3,19])(PROD([Q(38),Q(1.5)])))
spazio_quarto_livello=T([1,2])([3,20.5])(PROD([Q(38),Q(1.5)]))

colonna_quinto_livello=COLOR(RED)(T([1,2])([1.5,22])(PROD([Q(41),Q(1.5)])))
spazio_quinto_livello=T([1,2])([1.5,23.5])(PROD([Q(41),Q(1.5)]))

colonna_sesto_livello=COLOR(RED)(T(2)(25)(PROD([Q(44),Q(1.5)])))

edificio_alto_senza_porte=PROD([Q(8),Q(4)])
porta=PROD([Q(1),Q(2)])
edificio_alto_con_porte_uno=T([1,2])([10.5,26.5])(COLOR(RED)(DIFFERENCE([edificio_alto_senza_porte,T(1)(2)(porta),T(1)(5)(porta)])))
edificio_alto_con_porte_due=T([1,2])([25.5,26.5])(COLOR(RED)(DIFFERENCE([edificio_alto_senza_porte,T(1)(2)(porta),T(1)(5)(porta)])))
tetto_edificio=T([1,2])([10,30.5])(COLOR(RED)(PROD([Q(24),Q(1)])))
ed=STRUCT([edificio_alto_con_porte_uno,edificio_alto_con_porte_due,tetto_edificio])

south=INSR(STRUCT) ([edificio_alto_con_porte_uno, tetto_edificio, edificio_alto_con_porte_due, colonna_sesto_livello,colonna_quinto_livello,spazio_quinto_livello,COLOR(RED)(colonna_quarto_livello),spazio_quarto_livello,colonna_terzo_livello,spazio_terzo_livello,colonna_secondo_livello,spazio_secondo_livello,colonna_primo_livello,spazio_primo_livello,settore_inferiore])

#VIEW(south)

######################################################################################
#FACCIATA OVEST

colonna_rossa=COLOR(RED)(PROD([Q(1.5),Q(10)]))
spazio=PROD([Q(1.0),Q(10)])

colonne_sinistra_rosse=STRUCT([colonna_rossa,T(1)(2.5)]*3)
spazi_sinistra=STRUCT([spazio,T(1)(2.5),]*2)

settore_sinistro=STRUCT([colonne_sinistra_rosse,T(1)(1.5)(spazi_sinistra)])
settore_destro=T(1)(19.5)(settore_sinistro)
settore_inferiore=T(1)(9) (STRUCT([settore_sinistro,settore_destro]))


colonna_primo_livello=T([1,2])([7.5,10])(PROD([Q(29),Q(1.5)]))
spazio_primo_livello=COLOR(RED)(T([1,2])([7.5,11.5])(PROD([Q(29),Q(1.5)])))

colonna_secondo_livello=T([1,2])([6,13])(PROD([Q(32),Q(1.5)]))
spazio_secondo_livello=COLOR(RED)(T([1,2])([6,14.5])(PROD([Q(32),Q(1.5)])))

colonna_terzo_livello=T([1,2])([4.5,16])(PROD([Q(35),Q(1.5)]))
spazio_terzo_livello=COLOR(RED)(T([1,2])([4.5,17.5])(PROD([Q(35),Q(1.5)])))

colonna_quarto_livello=COLOR(WHITE)(T([1,2])([3,19])(PROD([Q(38),Q(1.5)])))
spazio_quarto_livello=COLOR(RED)(T([1,2])([3,20.5])(PROD([Q(38),Q(1.5)])))

colonna_quinto_livello=T([1,2])([1.5,22])(PROD([Q(41),Q(1.5)]))
spazio_quinto_livello=COLOR(RED)(T([1,2])([1.5,23.5])(PROD([Q(41),Q(1.5)])))

colonna_sesto_livello=T(2)(25)(PROD([Q(44),Q(1.5)]))

edificio_alto_senza_porte=PROD([Q(8),Q(4)])
porta=PROD([Q(1),Q(2)])
edificio_alto_con_porte_uno=T([1,2])([10.5,26.5])(COLOR(RED)(DIFFERENCE([edificio_alto_senza_porte,T(1)(2)(porta),T(1)(5)(porta)])))
edificio_alto_con_porte_due=T([1,2])([25.5,26.5])(COLOR(RED)(DIFFERENCE([edificio_alto_senza_porte,T(1)(2)(porta),T(1)(5)(porta)])))
tetto_edificio=T([1,2])([10,30.5])(COLOR(RED)(PROD([Q(24),Q(1)])))
ed=STRUCT([edificio_alto_con_porte_uno,edificio_alto_con_porte_due,tetto_edificio])

west=INSR(STRUCT) ([edificio_alto_con_porte_uno, tetto_edificio, edificio_alto_con_porte_due, colonna_sesto_livello,colonna_quinto_livello,spazio_quinto_livello,COLOR(RED)(colonna_quarto_livello),spazio_quarto_livello,colonna_terzo_livello,spazio_terzo_livello,colonna_secondo_livello,spazio_secondo_livello,colonna_primo_livello,spazio_primo_livello,settore_inferiore])

#VIEW(west)



###########################################################


#MOCKUP 3D



#floor0

base=T([1,2])([9,0])(COLOR(GRAY)(PROD([Q(26),Q(26)])))
quadrato=T([1,2])([9,0])(COLOR(RED)(PROD([Q(1.5),Q(1.5)])));
quadrati_orizzontali=STRUCT([quadrato,T(1)(2.5)]*3+[T(1)(12),quadrato]+[T(1)(2.5),quadrato]*2)
quadrati_verticali=STRUCT([quadrati_orizzontali,T(2)(2.5)]*3+[T(2)(12),quadrati_orizzontali]+[T(2)(2.5),quadrati_orizzontali]*2)
quadrato_bianco=T([1,2,3])([10.5,1.5,0.1])(PROD([Q(3.5),Q(3.5)]));
quadrati_bianchi_orizzontali=STRUCT([quadrato_bianco,T(1)(19.5)]*2)
quadrati_bianchi_verticali=STRUCT([quadrati_bianchi_orizzontali,T(2)(19.5)]*2)
floor0=INSR(STRUCT) ([quadrati_bianchi_verticali, quadrati_verticali,base])

#floor1

base1=T([3])(-0.1)(COLOR(GRAY)(PROD([Q(47),Q(47)])))
edif=T([1,2])([10.5,10.5])(COLOR(RED)(PROD([Q(8),Q(8)])))
tetto_edif=T([1,2])([11,11])(PROD([Q(7),Q(7)]))
edif=STRUCT([edif,tetto_edif])
edif_orizzontali=STRUCT([edif,T(1)(15)]*2)
edif_verticali=T([3])(0.1)(STRUCT([edif_orizzontali,T(2)(15)]*2))
ponte_orizz=T([1,2])([11,11])(PROD([Q(7),Q(14.5)]))
ponti_orizz=STRUCT([ponte_orizz,T(1)(15)]*2)
ponte_vertic=T([1,2])([11,11])(PROD([Q(14.5),Q(7)]))
ponti_vertic=STRUCT([ponte_vertic,T(2)(15)]*2)
bas=GRID([47])
altezza=GRID([1.5,-44,1.5])
linee_orizzontali=PROD([bas,altezza])
linee_verticali=PROD([altezza,bas])
griglia=T([3])(0.1)(COLOR(RED)(STRUCT([linee_verticali,linee_orizzontali])))

floor1=INSR(STRUCT) ([griglia,edif_verticali,base1,ponti_vertic,ponti_orizz])

east=T([1,3])([10,-35])(R([1,3])(PI/2)(east))
west=T(1)(25)(east)
south=T(3)(-25)(north)
mura=STRUCT([north,south,east,west])

floor1=T([1,2,3])([-0.5,26,10])(R([3,2])(PI/2)(floor1))
floor0=T([2,3])([0,0])(R([3,2])(PI/2)(floor0))

MOCKED3D=STRUCT([floor0,mura,floor1])
VIEW(MOCKED3D)

