from pyplasm import *
from larcc import *
from random import random

# definizione dei colori 

col=Color4f([(0.78),(0.04),(0.084)])
green=Color4f([(0.133),(0.545),(0.133)])
col_brown=Color4f([(0.627),(0.321),(0.176)])

n1 = 50

def dom(n): 
    return INTERVALS(1)(n)
dom1D = dom(n1)

#############################################################################################################
# Creo una panchina e la corrispondente panchina senza lo schienale

c1 = BEZIER(S1)([[0.30, 0], [0.18, 0.08], [0.20, 0.27], [0.30, 0.40]])
profile1 = MAP(c1)(dom1D)
c2 = BEZIER(S1)([[-0.30, 0], [-0.18, 0.08], [-0.20, 0.27], [-0.30, 0.40]])
profile2 = MAP(c2)(dom1D)
c3 = BEZIER(S1)([[-0.30, 0], [0, 0.20], [0.30, 0]])
profile3 = MAP(c3)(dom1D)
c4 = BEZIER(S1)([[-0.30, 0.40], [0, 0.40], [0.30, 0.40]])
profile4 = MAP(c4)(dom1D)

base_1=PROD([profile1,Q(0.05)])
base_2=PROD([profile2,Q(0.05)])
base_3=PROD([profile3,Q(0.05)])
base_4=PROD([profile4,Q(0.05)])

appoggio=CUBOID([0.05,0.01,0.07])
appoggio_1=T([1,3])([0.255,-0.01])(appoggio)
appoggio_2=T([1,3])([-0.305,-0.01])(appoggio)

base_legno1=T(1)(0.02)(MKPOL([[[0.3,-0.3],[0.3,2.2],[0.1,-0.3],[0.1,2.2]],[[1,2,3,4]],None]))
base_legno2=MKPOL([[[0.1,-0.3],[0.1,2.2],[-0.1,-0.3],[-0.1,2.2]],[[1,2,3,4]],None])
base_legno3=T(1)(-0.02)(MKPOL([[[-0.1,-0.3],[-0.1,2.2],[-0.3,-0.3],[-0.3,2.2]],[[1,2,3,4]],None]))

base_legno1_3D=PROD([base_legno1,Q(0.03)])
base_legno2_3D=PROD([base_legno2,Q(0.03)])
base_legno3_3D=PROD([base_legno3,Q(0.03)])


base_sedersi=COLOR(col_brown)(T(2)(0.4)(R([3,2])(PI/2)(R([2,1])(PI/2)(INSR(STRUCT)([base_legno1_3D,base_legno2_3D,base_legno3_3D])))))
base_schiena=COLOR(col_brown)(T([2,3])([0.65,-0.32])(R([2,1])(PI/2)(INSR(STRUCT)([base_legno3_3D,base_legno2_3D]))))

appoggio=COLOR(BLACK)(R([1,3])(PI/2)(INSR(STRUCT)([base_1,base_2,base_3,base_4,appoggio_1,appoggio_2])))
appoggio_2=T(1)(1.9)(appoggio)

base_schienale=CUBOID([0.05,0.5])
base_schienale_3D=COLOR(BLACK)(T([2,3])([0.4,-0.32])(R([3,1])(PI)(PROD([base_schienale,Q(0.005)]))))
base_schienale_3D_2=T(1)(1.9)(base_schienale_3D)

panchina=T(3)(-0.025)(INSR(STRUCT)([base_schiena, base_schienale_3D,base_schienale_3D_2, base_sedersi,appoggio,appoggio_2]))
panchina_senza_schienale=T(3)(-0.025)(INSR(STRUCT)([ base_sedersi,appoggio,appoggio_2]))


#VIEW(panchina)
#VIEW(panchina_senza_schienale)

######################################################################################################################################

# Creo un palo della luce

def mezzo_disco2D(p):
	u,v=p
	return [v*COS(u),v*SIN(u)]

domain2D=PROD([INTERVALS(PI)(32),INTERVALS(1)(3)])

lampada=PROD([Q(3),MAP(mezzo_disco2D)(domain2D)])
lampada=COLOR(GRAY)(S([1,2,3])([0.18,0.18,0.18])(lampada))

luce=T([1,2,3])([0.06,-0.15,-0.01])((CUBOID([0.4,0.3,0.001])))

lampada_con_luce=T([1,3])([0.2,3.90])(STRUCT([lampada,luce]))

palo = larRod([0.05,4])([32,1])
palo=COLOR(GRAY)(STRUCT(MKPOLS(palo)))
tieni_lampada=COLOR(GRAY)(T([2,3])([-0.03,3.95])(PROD([CUBOID([0.2,0.05]),Q(0.05)])))

luce_emessa = CONE([2,4])(17)
luce_emessa = MATERIAL([1,1,1,0, 0,0,0,0.3, 0,0,0,0, 0,0,0,0, 30])(luce_emessa)
luce_emessa = T(1)(0.45)(luce_emessa)

palo_della_luce= STRUCT([palo,tieni_lampada,lampada_con_luce, luce_emessa])

#VIEW(palo_della_luce)

#######################################################################################################################################

#Creo un cespuglio

cespuglio=COLOR(green)(T(1)(0.025)(CUBOID([1.95,0.5,1])))
corona=COLOR(col_brown) (T(2)(-0.075)(CUBOID([2,0.65,0.05])))
vaso=COLOR(col_brown)(T([1,2,3])([0.05,-0.040,-0.5])(CUBOID([1.9,0.6,0.5])))

def randomPoints(m, sx=1, sy=1):
	def point():
		return [random() * sx, random() * sy]
	return [point() for k in range(m)]

vertici=randomPoints(2000,1.94,1)
fiori=T([1,2])([0.022,-0.01])(COLOR(BLUE)(R([2,3])(PI/2)(MKPOL([vertici,AA(LIST)(range(2000)),None]))))
fiori_2=T([1,2])([0.022,0.51])(COLOR(BLUE)(R([2,3])(PI/2)(MKPOL([vertici,AA(LIST)(range(2000)),None]))))


vaso_cespuglio=INSR(STRUCT)([cespuglio,corona,vaso])

#VIEW(vaso_cespuglio)

########################################################################################################################################
#Creo un cestino

cestino=checkModel(larCylinder([0.5,1])([15,25]))
base_cestino=larDisk(0.5)([15,4])
cestino=STRUCT(MKPOLS(cestino))
base_cestino=STRUCT(MKPOLS(base_cestino))
cestino_completo=COLOR (GRAY)(STRUCT([cestino,base_cestino]))
#VIEW(cestino_completo)

#########################################################################################################################################

#Creo un albero

sphere=checkModel(larSphere(1)([15,25]))
sphere=STRUCT(MKPOLS(sphere))
sphere1=T(1)(1.4)(sphere)
sphere2=T([1,2])([0.7,0.7])(sphere)
sphere3=T([1,2])([0.7,-0.7])(sphere)
sphere4=T([1,3])([0.7,0.8])(sphere)

foglie=STRUCT([sphere,sphere1,sphere2,sphere3,sphere4])

foglie=COLOR(green)(T([1,2,3])([-0.7,0,3])(foglie))

fusto = larRod([0.15,3])([32,1])
fusto=COLOR(col_brown)(STRUCT(MKPOLS(fusto)))

albero=STRUCT([foglie,fusto])

#VIEW(albero)

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



palo_della_luce=R([3,2])(PI/2)(palo_della_luce)
palo_della_luce_sinistra=T([1,3])([20,85])(R([1,3])(PI/2)(palo_della_luce))
pali_della_luce_sinistra=STRUCT([palo_della_luce_sinistra,T(1)(3)]*41)
palo_della_luce_destra=T([1,3])([20,105.5])(R([3,1])(PI/2)(palo_della_luce))
palo_della_luce_destra=STRUCT([palo_della_luce_destra,T(1)(3)]*41)


panchina_verso_sinistra=T([1,3])([60,10])(panchina)
panchina_verso_sinistra2=T([1,3])([65,10])(panchina)
panchine_verso_sinistra=INSR(STRUCT)([panchina_verso_sinistra,panchina_verso_sinistra2])
panchina_verso_fronte=T([1,3])([70,12])(R([1,3])(PI/2)(panchina))

cestino=T([1,2,3])([70,0,10])(R([3,2])(PI/2)(cestino))

spiazzo=INSR(STRUCT)([panchine_verso_sinistra,panchina_verso_fronte,cestino])
spiazzo_2=T([1,3])([70,10])(spiazzo)

spiazzo_ruotato=T([1,3])([40,120])(R([3,1])(PI/2)(spiazzo))
spiazzo_ruotato_2=T([1,3])([-42,80])(spiazzo_ruotato)

vaso_cespuglio=T([1,2,3])([35,0.5,5])(R([3,2])(PI/2)(vaso_cespuglio))
vasi_cespugli=STRUCT([vaso_cespuglio,T(1)(2)]*25)
vaso_cespuglio_2=T(1)(80)(vaso_cespuglio)
vasi_cespugli_2=STRUCT([vaso_cespuglio_2,T(1)(2)]*38)
vaso_cespuglio_3=T([1,3])([4.5,120])(vaso_cespuglio_2)
vasi_cespugli_3=STRUCT([vaso_cespuglio_3,T(1)(2)]*36)
vaso_cespuglio_4=T([1,3])([-84,70])(vaso_cespuglio_3)
vasi_cespugli_4=STRUCT([vaso_cespuglio_4,T(1)(2)]*30)
vaso_cespuglio_orizzontale=T([1,3])([80,42])(R([3,1])(PI/2) (vaso_cespuglio))
vasi_cespugli_orizzontali=STRUCT([vaso_cespuglio_orizzontale,T(3)(2)]*35)
vaso_cespuglio_orizzontale_2=T(1)(30)(vaso_cespuglio_orizzontale)
vasi_cespugli_orizzontali_2=STRUCT([vaso_cespuglio_orizzontale_2,T(3)(2)]*35)
vaso_cespuglio_orizzontale_3=T([1,3])([5,120])(vaso_cespuglio_orizzontale_2)
vasi_cespugli_orizzontali_3=STRUCT([vaso_cespuglio_orizzontale_3,T(3)(2)]*15)
vaso_cespuglio_orizzontale_4=T(1)(-25)(vaso_cespuglio_orizzontale_3)
vasi_cespugli_orizzontali_4=STRUCT([vaso_cespuglio_orizzontale_4,T(3)(2)]*35)

albero=T([1,3])([54,55])(R([3,2])(PI/2)(albero))
albero_2=T([1,3])([34,76])(albero)
albero_3=T([1,3])([15,-30])(albero)
albero_4=T([1,3])([-15,40])(albero_2)
albero_5=T([1,3])([-70,10])(albero_2)
albero_6=T([1,3])([40,10])(albero_2)
albero_7=T([1,3])([75,-23])(albero)
albero_8=T([1,2,3])([27,37,59])(albero_7)
alberi=STRUCT([albero,albero_2,albero_3,albero_4,albero_5,albero_6,albero_7,albero_8])

##################################################################################################################################################################

#visualizzo la costruzione finale

costruzione_con_oggetti=INSR(STRUCT)([alberi,costruzione,pali_della_luce_sinistra,palo_della_luce_destra,spiazzo,spiazzo_2,spiazzo_ruotato,spiazzo_ruotato_2,vasi_cespugli,vasi_cespugli_2, vasi_cespugli_3, vasi_cespugli_4, vasi_cespugli_orizzontali,vasi_cespugli_orizzontali_2,vasi_cespugli_orizzontali_3,vasi_cespugli_orizzontali_4])

VIEW(costruzione_con_oggetti)