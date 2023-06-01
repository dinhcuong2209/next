import classes from './Test.module.css';
import resets from '~/styles/_resets.module.css';

import { LogoIcon } from '~/components/TestIcon/LogoIcon';
import { Frame108Icon } from '~/components/TestIcon/Frame108Icon';
import { FrameIcon2 } from '~/components/TestIcon/FrameIcon2';
import { FrameIcon3 } from '~/components/TestIcon/FrameIcon3';
import { FrameIcon4 } from '~/components/TestIcon/FrameIcon4';
import { FrameIcon5 } from '~/components/TestIcon/FrameIcon5';
import { FrameIcon6 } from '~/components/TestIcon/FrameIcon6';
import { FrameIcon7 } from '~/components/TestIcon/FrameIcon7';
import { FrameIcon8 } from '~/components/TestIcon/FrameIcon8';
import { FrameIcon9 } from '~/components/TestIcon/FrameIcon9';
import { FrameIcon10 } from '~/components/TestIcon/FrameIcon10';
import { FrameIcon11 } from '~/components/TestIcon/FrameIcon11';
import { FrameIcon12 } from '~/components/TestIcon/FrameIcon12';
import { FrameIcon13 } from '~/components/TestIcon/FrameIcon13';
import { FrameIcon14 } from '~/components/TestIcon/FrameIcon14';
import { FrameIcon15 } from '~/components/TestIcon/FrameIcon15';
import { FrameIcon16 } from '~/components/TestIcon/FrameIcon16';
import { FrameIcon17 } from '~/components/TestIcon/FrameIcon17';
import { FrameIcon18 } from '~/components/TestIcon/FrameIcon18';
import { FrameIcon19 } from '~/components/TestIcon/FrameIcon19';
import { FrameIcon20 } from '~/components/TestIcon/FrameIcon20';
import { FrameIcon21 } from '~/components/TestIcon/FrameIcon21';
import { FrameIcon22 } from '~/components/TestIcon/FrameIcon22';
import { FrameIcon23 } from '~/components/TestIcon/FrameIcon23';
import { FrameIcon24 } from '~/components/TestIcon/FrameIcon24';
import { FrameIcon25 } from '~/components/TestIcon/FrameIcon25';
import { FrameIcon26 } from '~/components/TestIcon/FrameIcon26';
import { FrameIcon27 } from '~/components/TestIcon/FrameIcon27';
import { FrameIcon28 } from '~/components/TestIcon/FrameIcon28';
import { FrameIcon } from '~/components/TestIcon/FrameIcon';
import { HomeIcon } from '~/components/TestIcon/HomeIcon';
import { MenuIcon_EtatsNormalPageHome } from '~/components/TestIcon/MenuIcon_EtatsNormalPageHome/MenuIcon_EtatsNormalPageHome';

const test = () => {
	return (
		<div className={`${resets.storybrainResets} ${classes.root}`}>
			<div className={classes._0_Navbar}>
				<div className={classes.content}>
					<div className={classes.left}>
						<div className={classes.logo}>
							<div className={classes.logo2}>
								<LogoIcon className={classes.icon} />
							</div>
							<div className={classes.line}></div>
						</div>
						<div className={classes.inputSearch}>
							<div className={classes.frame}>
								<FrameIcon className={classes.icon2} />
							</div>
							<div className={classes.rechercherUneValeur}>Rechercher une valeur...</div>
						</div>
					</div>
					<div className={classes.right}>
						<div className={classes.profil}>
							<div className={classes.frame1}>
								<div className={classes.mS}>MS</div>
							</div>
							<div className={classes.frame2}>
								<FrameIcon2 className={classes.icon3} />
							</div>
						</div>
					</div>
				</div>
				<div className={classes.line2}></div>
			</div>
			<div className={classes.sidebar}>
				<div className={classes.content2}>
					<div className={classes.top}>
						<div className={classes.menuIcon}>
							<div className={classes.home}>
								<HomeIcon className={classes.icon4} />
							</div>
						</div>
						<div className={classes.menuIcon2}>
							<div className={classes.frame3}>
								<FrameIcon3 className={classes.icon5} />
							</div>
						</div>
						<div className={classes.menuIcon3}>
							<div className={classes.frame4}>
								<FrameIcon4 className={classes.icon6} />
							</div>
						</div>
						<div className={classes.menuIcon4}>
							<div className={classes.frame5}>
								<FrameIcon5 className={classes.icon7} />
							</div>
						</div>
					</div>
					<div className={classes.top2}>
						<MenuIcon_EtatsNormalPageHome />
					</div>
				</div>
				<div className={classes.line3}></div>
			</div>
			<div className={classes.frame16}>
				<div className={classes.frame17}>
					<div className={classes.frame15}>
						<div className={classes.fonds}>Fonds</div>
					</div>
				</div>
				<div className={classes.frame12}>
					<div className={classes.line4}></div>
					<div className={classes.frame22}>
						<div className={classes.frame13}>
							<div className={classes.frame132}>
								<div className={classes.frame6}>
									<FrameIcon6 className={classes.icon8} />
								</div>
							</div>
							<div className={classes.frame14}>
								<div className={classes.trading}>Trading</div>
								<div className={classes.portefeuille}>Portefeuille</div>
							</div>
						</div>
						<div className={classes.frame7}>
							<FrameIcon7 className={classes.icon9} />
						</div>
					</div>
					<div className={classes.line5}></div>
					<div className={classes.frame18}>
						<div className={classes.frame142}>
							<div className={classes._217986}>2 179.86€</div>
							<div className={classes.liquidite}>Liquidité</div>
						</div>
						<div className={classes.line6}></div>
						<div className={classes.frame133}>
							<div className={classes._67986}>+679.86€</div>
							<div className={classes.totalPL}>Total P&amp;L</div>
						</div>
						<div className={classes.line7}></div>
						<div className={classes.frame152}>
							<div className={classes._22367986}>2 023 679.86€</div>
							<div className={classes.total}>Total</div>
						</div>
					</div>
					<div className={classes.line8}></div>
				</div>
			</div>
			<div className={classes.line9}></div>
			<div className={classes.portefeuille2}>
				<div className={classes.frame19}>
					<div className={classes.frame110}>
						<div className={classes.frame134}>
							<div className={classes.frame8}>
								<FrameIcon8 className={classes.icon10} />
							</div>
						</div>
						<div className={classes.frame111}>
							<div className={classes.trading2}>Trading</div>
							<div className={classes.portefeuille3}>Portefeuille</div>
						</div>
					</div>
					<div className={classes.frame112}>
						<div className={classes.frame122}>
							<div className={classes._29298290}>292 982.90€</div>
							<div className={classes.total2}>Total</div>
						</div>
						<div className={classes.frame9}>
							<FrameIcon9 className={classes.icon11} />
						</div>
					</div>
				</div>
				<div className={classes.line10}></div>
				<div className={classes.frame42}>
					<div className={classes.frame113}>
						<div className={classes.frame135}>
							<div className={classes.frame10}>
								<FrameIcon10 className={classes.icon12} />
							</div>
						</div>
						<div className={classes.frame114}>
							<div className={classes.risk}>Risk</div>
							<div className={classes.portefeuille4}>Portefeuille</div>
						</div>
					</div>
					<div className={classes.frame115}>
						<div className={classes.frame123}>
							<div className={classes._292982902}>292 982.90€</div>
							<div className={classes.total3}>Total</div>
						</div>
						<div className={classes.frame11}>
							<FrameIcon11 className={classes.icon13} />
						</div>
					</div>
				</div>
				<div className={classes.line11}></div>
				<div className={classes.frame32}>
					<div className={classes.frame116}>
						<div className={classes.frame136}>
							<div className={classes.frame20}>
								<FrameIcon12 className={classes.icon14} />
							</div>
						</div>
						<div className={classes.frame117}>
							<div className={classes.tNTDynamic}>TNT Dynamic</div>
							<div className={classes.assets}>Assets</div>
						</div>
					</div>
					<div className={classes.frame118}>
						<div className={classes.frame124}>
							<div className={classes._210230290}>2 102 302.90€</div>
							<div className={classes.total4}>Total</div>
						</div>
						<div className={classes.frame21}>
							<FrameIcon13 className={classes.icon15} />
						</div>
					</div>
				</div>
				<div className={classes.line12}></div>
				<div className={classes.frame62}>
					<div className={classes.frame119}>
						<div className={classes.frame137}>
							<div className={classes.frame23}>
								<FrameIcon14 className={classes.icon16} />
							</div>
						</div>
						<div className={classes.frame120}>
							<div className={classes.tNTDynamic2}>TNT Dynamic</div>
							<div className={classes.liquide}>Liquidé</div>
						</div>
					</div>
					<div className={classes.frame121}>
						<div className={classes.frame125}>
							<div className={classes._0}>0.00€</div>
							<div className={classes.total5}>Total</div>
						</div>
						<div className={classes.frame24}>
							<FrameIcon15 className={classes.icon17} />
						</div>
					</div>
				</div>
				<div className={classes.line13}></div>
				<div className={classes.frame52}>
					<div className={classes.frame126}>
						<div className={classes.frame127}>
							<div className={classes.creerUnNouveauPortefeuille}>Créer un nouveau portefeuille</div>
						</div>
					</div>
					<div className={classes.frame128}></div>
					<div className={classes.frame25}>
						<FrameIcon16 className={classes.icon18} />
					</div>
				</div>
			</div>
			<div className={classes.rectangle77}></div>
			<div className={classes.frame108}>
				<div className={classes.frame109}>
					<div className={classes.frame26}>
						<FrameIcon17 className={classes.icon19} />
					</div>
					<div className={classes.frame1082}>
						<div className={classes.deposer}>Déposer</div>
					</div>
				</div>
				<div className={classes.frame1083}>
					<div className={classes.frame27}>
						<FrameIcon18 className={classes.icon20} />
					</div>
					<div className={classes.frame28}>
						<FrameIcon19 className={classes.icon21} />
					</div>
				</div>
				<div className={classes.frame1102}>
					<div className={classes.frame29}>
						<FrameIcon20 className={classes.icon22} />
					</div>
					<div className={classes.frame1084}>
						<div className={classes.ouvrirUnCompteReel}>Ouvrir un compte réel</div>
					</div>
				</div>
			</div>
			<div className={classes.frame304}>
				<div className={classes.frame129}>
					<div className={classes.frame1085}>
						<div className={classes.frame30}>
							<FrameIcon21 className={classes.icon23} />
						</div>
						<div className={classes.frame1086}>
							<div className={classes.frame130}>
								<div className={classes.frame1087}>
									<div className={classes.charlesColvardLtd}>Charles &amp; Colvard Ltd.</div>
								</div>
							</div>
							<div className={classes.frame131}>
								<div className={classes._96}>0,96 $</div>
								<div className={classes._356}>-0,03 $ (0,56 %)</div>
							</div>
						</div>
					</div>
					<div className={classes.frame308}>
						<div className={classes.frame31}>
							<FrameIcon22 className={classes.icon24} />
						</div>
					</div>
				</div>
				<div className={classes.frame1088}>
					<div className={classes.frame300}>
						<div className={classes.market}>Market</div>
					</div>
					<div className={classes.frame301}>
						<div className={classes.limit}>Limit</div>
					</div>
					<div className={classes.frame302}>
						<div className={classes.stop}>Stop</div>
					</div>
					<div className={classes.frame303}>
						<div className={classes.frame33}>
							<FrameIcon23 className={classes.icon25} />
						</div>
						<div className={classes.frame34}>
							<FrameIcon24 className={classes.icon26} />
						</div>
					</div>
				</div>
				<div className={classes.frame1089}>
					<div className={classes.frame306}>
						<div className={classes.quantite}>Quantité</div>
						<div className={classes._1}>1</div>
					</div>
					<div className={classes.frame307}>
						<div className={classes.montantTotalEstime}>Montant total estimé</div>
						<div className={classes._95}>0.95</div>
					</div>
				</div>
				<div className={classes.frame1103}>
					<div className={classes.frame1104}>
						<div className={classes.frame10810}>
							<div className={classes._968}>0.968</div>
							<div className={classes.aCHETER}>ACHETER</div>
						</div>
					</div>
					<div className={classes.frame1092}>
						<div className={classes.frame10811}>
							<div className={classes.vendre}>Vendre</div>
							<div className={classes._950}>0.950</div>
						</div>
					</div>
				</div>
				<div className={classes.frame1122}>
					<div className={classes.frame138}>
						<div className={classes.fRAIS}>FRAIS</div>
					</div>
					<div className={classes.frame139}>
						<div className={classes._947490}>
							<p className={classes.labelWrapper}>
								<span className={classes.label}>94,74% </span>
								<span className={classes.label2}>(0,90 €)</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.frame1093}>
				<div className={classes.frame35}>
					<FrameIcon25 className={classes.icon27} />
				</div>
				<div className={classes.frame10812}>
					<div className={classes.deposer2}>Déposer</div>
				</div>
			</div>
			<div className={classes.frame10813}>
				<div className={classes.frame10814}>
					<div className={classes._89}>89%</div>
					<div className={classes.frame36}>
						<FrameIcon26 className={classes.icon28} />
					</div>
				</div>
				<div className={classes.vosRevenusOntAugmentesDe89CeMo}>
					<p className={classes.labelWrapper2}>
						<span className={classes.label3}>Vos revenus ont augmentés de 89% </span>
						<span className={classes.label4}>ce mois-ci.</span>
					</p>
				</div>
				<div className={classes.frame10815}>
					<div className={classes.frame37}>
						<FrameIcon27 className={classes.icon29} />
					</div>
					<div className={classes.frame10816}>
						<Frame108Icon className={classes.icon30} />
					</div>
					<div className={classes.frame38}>
						<FrameIcon28 className={classes.icon31} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default test;