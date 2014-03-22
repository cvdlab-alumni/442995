from pyplasm import *

col=Color4f([(0.78),(0.04),(0.084)])

#######################  ES 4   ###################
#SCALA

def creaRampa (lung) :
	grad2d = MKPOL([[[0,0],[0,0.2],[0.2,0.2]],[[1,2,3]],None])
	grad3d = MAP([S1,S3,S2])(PROD([grad2d,Q(30)]))
	rampa=STRUCT([grad3d,T([1,3])([0.2,0.2])]*lung)
	return rampa

def creaBaseSupporto (lung):
	supp2d = MKPOL([[[0,0],[0.2*lung,0],[0.2*lung,0.2*lung]],[[1,2,3]],None])
	supp3d = MAP([S1,S3,S2])(PROD([supp2d,Q(30)]))
	return supp3d

supp=creaRampa(50)
ramp=creaBaseSupporto(50)
scala= COLOR(GRAY)(T([1,2,3])([-3,-10,7.5])(MAP([S1,S3,S2])(STRUCT([supp,ramp]))))
supporto=COLOR(GRAY)(T([1,2,3])([7,-10,7.5])(CUBOID([40,10,30])))

###########################


colonna_rossa3D=COLOR(col)(INSR(PROD)([Q(1.5),Q(10),Q(1.5)]))
colonne_orizz_rosse3D=STRUCT([colonna_rossa3D,T(1)(2.5)]*3+[T(1)(12),colonna_rossa3D]+[T(1)(2.5),colonna_rossa3D]*2)
colonne_vertic_rosse3D=T([1,3])([9,9])(STRUCT([colonne_orizz_rosse3D,T(3)(2.5)]*3+[T(3)(13),colonne_orizz_rosse3D]+[T(3)(2.5),colonne_orizz_rosse3D]*2))

finestra3D=T(3)(9)(COLOR(BLACK)(INSR(PROD)([Q(3.5),Q(10),Q(3.5)])))
finestre_orizz_3D=T([1,3])([10.5,1.5])(STRUCT([finestra3D,T(1)(19.5)]*2))
finestre_vertic_3D=STRUCT([finestre_orizz_3D,T(3)(20.5)]*2)


colonna_primo_livello3D=COLOR(col)(T([1,2,3])([7.5,10,9])(INSR(PROD)([Q(29),Q(1.5),Q(1.5)])))
colonne_primo_livello3D=STRUCT([colonna_primo_livello3D,T(3)(2.5)]*3+[T(3)(13),colonna_primo_livello3D]+[T(3)(2.5),colonna_primo_livello3D]*2)

colonne_sec_livello3D=T(2)(1.5)(colonne_primo_livello3D)
colonne_sec_livello3D=COLOR(col)(MAP([S3,S2,S1])(colonne_sec_livello3D))

colonna_ter_livello3D=COLOR(col)(T([1,2,3])([6,13,6.5])(INSR(PROD)([Q(33),Q(1.5),Q(1.5)])))
colonne_ter_livello3D=T(3)(2)(STRUCT([colonna_ter_livello3D,T(3)(2.5)]*3+[T(3)(3.5),colonna_ter_livello3D]+[T(3)(3.5),colonna_ter_livello3D]*4))
colonne_quar_livello3D=T([2,3])([1.5,-1])(colonne_ter_livello3D)
colonne_quar_livello3D=COLOR(col)(MAP([S3,S2,S1])(colonne_quar_livello3D))



colonna_quin_livello3D=COLOR(col)(T([1,2,3])([4.5,16,4.5])(INSR(PROD)([Q(37),Q(1.5),Q(1.5)])))
colonne_quin_livello3D=T(3)(3)(STRUCT([colonna_quin_livello3D,T(3)(2.5)]*5+[T(3)(5.5),colonna_quin_livello3D]+[T(3)(3.5),colonna_quin_livello3D]*3))
colonne_ses_livello3D=T([2,3])([1.5,-1])(colonne_quin_livello3D)
colonne_ses_livello3D=COLOR(col)(T(1)(2)(MAP([S3,S2,S1])(colonne_ses_livello3D)))

colonna_sett_livello3D=COLOR(col)(T([1,2,3])([4,19,3])(INSR(PROD)([Q(39),Q(1.5),Q(1.5)])))
colonne_sett_livello3D=T(3)(3)(STRUCT([colonna_sett_livello3D,T(3)(2.5)]*4+[T(3)(5.5),colonna_sett_livello3D]+[T(3)(3.5),colonna_sett_livello3D]*5))
colonne_ott_livello3D=T([2,3])([1.5,-1])(colonne_sett_livello3D)
colonne_ott_livello3D=COLOR(col)(T(1)(3)(MAP([S3,S2,S1])(colonne_ott_livello3D)))

colonna_nono_livello3D=COLOR(col)(T([1,2,3])([1.5,22,2])(INSR(PROD)([Q(43),Q(1.5),Q(1.5)])))
colonne_nono_livello3D=T(3)(2)(STRUCT([colonna_nono_livello3D,T(3)(2.5)]*5+[T(3)(5.5),colonna_nono_livello3D]+[T(3)(3.5),colonna_nono_livello3D]*5))

colonne_decimo_livello3D=T([2,3])([1.5,-1])(colonne_nono_livello3D)
colonne_decimo_livello3D=COLOR(col)(T(1)(3)(MAP([S3,S2,S1])(colonne_decimo_livello3D)))


tetto=COLOR(col) (T([1,2,3])([1.5,25,1.5])(INSR(PROD)([Q(43),Q(1),Q(43)])))
pianale= T([1,2,3])([1.5,25,1.5])(INSR(PROD)([Q(43),Q(1.3),Q(43)]))
prato= COLOR(GRAY)(T([1,2,3])([3,25,3])(INSR(PROD)([Q(40),Q(1.5),Q(40)])))

edificio_alto_senza_porte=PROD([Q(8),Q(4)])
porta=PROD([Q(1),Q(2)])
edificio_alto_con_porte_uno=T([1,2])([10.5,26.5])(COLOR(col)(DIFFERENCE([edificio_alto_senza_porte,T(1)(2)(porta),T(1)(5)(porta)])))
edificio_alto_con_porte_due=T([1,2])([25.5,26.5])(COLOR(col)(DIFFERENCE([edificio_alto_senza_porte,T(1)(2)(porta),T(1)(5)(porta)])))
tetto_edificio=T([1,2])([10,30.5])(COLOR(col)(PROD([Q(24),Q(1)])))

ed=STRUCT([edificio_alto_con_porte_uno,edificio_alto_con_porte_due,tetto_edificio])

edificio=COLOR(col)(T(3)(12)(PROD([ed,Q(8)])))
edificio2=COLOR(col)(T(3)(26)(PROD([ed,Q(8)])))

costruzione=INSR(STRUCT) ([supporto,scala,prato,pianale,edificio,edificio2,tetto,colonne_decimo_livello3D,colonne_nono_livello3D,colonne_ott_livello3D,colonne_sett_livello3D,colonne_ses_livello3D,colonne_quin_livello3D,colonne_quar_livello3D,colonne_ter_livello3D,colonne_sec_livello3D, colonne_primo_livello3D ,finestre_vertic_3D,colonne_vertic_rosse3D])

VIEW(costruzione)

