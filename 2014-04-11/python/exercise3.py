from pyplasm import *
from larcc import *

col=Color4f([(0.78),(0.04),(0.084)])
green=Color4f([(0.133),(0.545),(0.133)])


#####################################################################################################################

def creaRampa (lung,q=30) :
	grad2d = MKPOL([[[0,0],[0,0.2],[0.2,0.2]],[[1,2,3]],None])
	grad3d = MAP([S1,S3,S2])(PROD([grad2d,Q(q)]))
	rampa=STRUCT([grad3d,T([1,3])([0.2,0.2])]*lung)
	return rampa

def creaBaseSupporto (lung,q=30):
	supp2d = MKPOL([[[0,0],[0.2*lung,0],[0.2*lung,0.2*lung]],[[1,2,3]],None])
	supp3d = MAP([S1,S3,S2])(PROD([supp2d,Q(q)]))
	return supp3d


def larRing1(params):
	r1,r2 =params
	def larRing0(shape=[36,1]):
		V,CV =larIntervals (shape)([PI,r2-r1])
		V=translatePoints(V,[0,r1])
		domain=V,CV
		x=lambda V : [p[1] * COS(p[0]) for p in V]
		y=lambda V : [p[1] * SIN(p[0]) for p in V]
		return larMap([x,y])(domain)
	return larRing0


def larDisk1(radius=1):
	def larDisk0(shape=[36,1]):
		domain=larIntervals(shape)([PI,radius])
		V,CV=domain
		x=lambda V : [p[1]*COS(p[0]) for p in V]
		y=lambda V : [p[1]*SIN(p[0]) for p in V]
		return larMap([x,y]) (domain)
	return larDisk0
	
#########################################################################################################################################################
#Creo l'entrata

ring=checkModel(larDisk1(15)([25,1]))
ring_2=checkModel(larDisk1(12)([25,1]))
ring_3=checkModel(larDisk1(5)([25,1]))
ring=STRUCT(MKPOLS(ring))
ring_2=STRUCT(MKPOLS(ring_2))
ring_3=STRUCT(MKPOLS(ring_3))
ring_3D=COLOR(col)(T([1,2])([3,20])(R([1,3])(PI/2)(PROD([ring,Q(4)]))))
ring_3D_2=T([1,2])([-1.5,20])(R([1,3])(PI/2)(PROD([ring_2,Q(0.1)])))
ring_3D_3=COLOR(BLACK)(T([1,2])([-2,20])(R([1,3])(PI/2)(PROD([ring_3,Q(0.1)]))))
colonna_1=COLOR(col)(T(3)(-15)(CUBOID([3,20,3])))
colonna_2=COLOR(col)(T(3)(12)(CUBOID([3,20,3])))
entrata=T([1,3])([10.2,95.3])(STRUCT([ring_3D,ring_3D_2,ring_3D_3, colonna_1,colonna_2]))

#VIEW(entrata)

supp=creaRampa(50)
ramp=creaBaseSupporto(50)
scala= COLOR(WHITE)(T([1,2,3])([0,-10,80])(MAP([S1,S3,S2])(STRUCT([supp,ramp]))))
supporto=COLOR(GRAY)(T(2)(-10)(CUBOID([200,10,200])))

cubo=T([1,2, 3])([0,-10,80])(CUBOID([10,10,30]))
cubo2=T([1,2, 3])([0,-10,0])(CUBOID([30,10,50]))
cubo3=T([1,2, 3])([0,-10,150])(CUBOID([30,10,50]))
supporto=COLOR(GRAY)(DIFFERENCE([supporto,cubo,cubo2,cubo3]))


########################################################################################################################################################
#creo dei giardini sul tetto della costruzione


giardino_supporto=COLOR(green)(MKPOL([[[35,0,5,],[85,0,5],[85,0,75],[35,0,75]],[[1,2,3,4]],None]))
giardino_supporto2=COLOR(green)(MKPOL([[[55,0,55],[55,0,75],[5,0,75],[5,0,55]],[[1,2,3,4]],None]))
giardino_supporto3=COLOR(green)(MKPOL([[[5,0,125,],[5,0,145],[95,0,125],[95,0,155]],[[1,2,3,4]],None]))
giardino_supporto4=T(2)(0.1)(COLOR(green)(MKPOL([[[95,0,125,],[35,0,195],[35,0,125],[95,0,195]],[[1,2,3,4]],None])))
giardino_supporto5=COLOR(green)(MKPOL([[[115,0,5,],[190,0,5],[145,0,65],[115,0,75]],[[1,2,3,4]],None]))
giardino_supporto6=COLOR(green)(MKPOL([[[120,0,125,],[185,0,145],[194,0,125],[120,0,155]],[[1,2,3,4]],None]))
giardino_1=T(2)(0.1)(STRUCT([giardino_supporto,giardino_supporto2, giardino_supporto3, giardino_supporto4, giardino_supporto5, giardino_supporto6]))

########################################################################################################################################################

#creao la strada che porta alla costruzione

strada=T([1,2,3])([10,0.1,80])(CUBOID([170,0.1,30]))
strada_bordo_1=COLOR(BLACK)(T([1,2,3])([10,0.3,80])(CUBOID([170,0.1,5])))
strada_bordo_2=T(3)(25)(strada_bordo_1)

#########################################################################################################################################################

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

#creo gli oggetti sul tetto

tetto=COLOR(col) (T([1,2,3])([1.5,25,1.5])(INSR(PROD)([Q(43),Q(1),Q(43)])))
pianale= T([1,2,3])([1.5,25,1.5])(INSR(PROD)([Q(43),Q(1.3),Q(43)]))
prato= COLOR(GRAY)(T([1,2,3])([3,25,3])(INSR(PROD)([Q(40),Q(1.5),Q(40)])))

edificio_alto_senza_porte=PROD([Q(8),Q(4)])
porta=PROD([Q(1),Q(2)])
edificio_alto_con_porte_uno=T([1,2])([10.5,26.5])(COLOR(col)(DIFFERENCE([edificio_alto_senza_porte,T(1)(2)(porta),T(1)(5)(porta)])))
edificio_alto_con_porte_due=T([1,2])([25.5,26.5])(COLOR(col)(DIFFERENCE([edificio_alto_senza_porte,T(1)(2)(porta),T(1)(5)(porta)])))
tetto_edificio=T([1,2])([10,30.5])(COLOR(col)(PROD([Q(24),Q(1)])))
ed=STRUCT([edificio_alto_con_porte_uno,edificio_alto_con_porte_due,tetto_edificio])

#creo i due edifici sul tetto con il rispettivo tetto
edificio=COLOR(col)(T(3)(12)(PROD([ed,Q(8)])))
edificio2=COLOR(col)(T(3)(26)(PROD([ed,Q(8)])))
tetto_edificio3D=T([1,3])([-1,45])(R([3,1])(PI/2)(COLOR(col)(T(3)(26)(PROD([tetto_edificio,Q(9)])))))
tetto_edificio3D_2=T(1)(-15)(tetto_edificio3D)


percorso_tetto=T([1,2,3])([11,32,13.5])(CUBOID([7,0.1,19]))
percorso_tetto_2=T(1)(15)(percorso_tetto)

percorso_tetto_3=T([1,2,3])([11,32,12.6])(CUBOID([22,0.1,7]))
percorso_tetto_4=T(3)(14)(percorso_tetto_3)

mura_tetto_edificio_1=COLOR(col)(T([1,2,3])([11,32,12.5])(CUBOID([0.3,2,21.1])))
mura_tetto_edificio_2=COLOR(col)(T([1,2,3])([18,32,12.5])(CUBOID([0.3,2,21.1])))
mura_tetto_edificio_3=COLOR(col)(T([1,2,3])([26,32,12.5])(CUBOID([0.3,2,21.1])))
mura_tetto_edificio_4=COLOR(col)(T([1,2,3])([33,32,12.5])(CUBOID([0.3,2,21.1])))
mura_tetto_edificio_5=COLOR(col)(T([1,2,3])([11,32.1,12.5])(CUBOID([22,2,0.3])))
mura_tetto_edificio_6=T(3)(7)(mura_tetto_edificio_5)
mura_tetto_edificio_7=T(3)(7)(mura_tetto_edificio_6)
mura_tetto_edificio_8=T(3)(7)(mura_tetto_edificio_7)
mura_tetto_edificio=T(2)(-0.5)(INSR(STRUCT)([ percorso_tetto_4, percorso_tetto_3, percorso_tetto_2, percorso_tetto, mura_tetto_edificio_8, mura_tetto_edificio_7, mura_tetto_edificio_6, mura_tetto_edificio_1,mura_tetto_edificio_2, mura_tetto_edificio_3,mura_tetto_edificio_4, mura_tetto_edificio_5]))

giardino_tetto1=COLOR(green)(T([1,2,3])([11,26.6,3.3])(CUBOID([7,0.1,39.3])))
giardino_tetto_2=T(1)(15)(giardino_tetto1)
giardino_tetto_3=COLOR(green)(T([1,2,3])([3.3,26.6,12.6])(CUBOID([39.3,0.1,7])))
giardino_tetto_4=T(3)(14)(giardino_tetto_3)

giardino_tetto=INSR(STRUCT)([giardino_tetto1,giardino_tetto_2,giardino_tetto_3, giardino_tetto_4])

supp=creaRampa(50,50)
ramp=creaBaseSupporto(50,50)
scala_2= COLOR(GRAY)(T([1,2,3])([-3,-10,-2.5])(MAP([S1,S3,S2])(STRUCT([supp,ramp]))))
supporto_2=COLOR(GRAY)(T([1,2,3])([7,-10,-2.5])(CUBOID([30.5,10,50])))

china_pavillion=T([1,2,3])([150,10,75])(INSR(STRUCT)([scala_2,supporto_2, giardino_tetto, mura_tetto_edificio, tetto_edificio3D,tetto_edificio3D_2,prato,pianale,edificio,edificio2,tetto,colonne_decimo_livello3D,colonne_nono_livello3D,colonne_ott_livello3D,colonne_sett_livello3D,colonne_ses_livello3D,colonne_quin_livello3D,colonne_quar_livello3D,colonne_ter_livello3D,colonne_sec_livello3D, colonne_primo_livello3D ,finestre_vertic_3D,colonne_vertic_rosse3D]))

#VIEW(china_pavillion)

##########################################################################################################################################################################

#Posiziono gli edifici sul terreno

edificio_terra=T([1,2,3])([56,-27,0])(R([1,3])(PI/2)(edificio))
edificio_terra_2=T([1,2,3])([60,-27,105])(edificio)
edificio_terra_3=COLOR(col)(T([1,2,3])([120,0,160]) (CUBOID([50,10,30])))
edificio_terra_4=MKPOL([[[0,20],[30,20],[30,-20]],[[1,2,3]],None])
edificio_terra_4_3D=COLOR(col)(T([1,2,3])([150,10,44])(R([2,3])(PI/2)(PROD([edificio_terra_4,Q(10)]))))

costruzione=INSR(STRUCT) ([edificio_terra_4_3D, edificio_terra_3, edificio_terra_2, edificio_terra, entrata, strada_bordo_2, strada_bordo_1, strada,giardino_1,supporto,scala,china_pavillion])

VIEW(costruzione)