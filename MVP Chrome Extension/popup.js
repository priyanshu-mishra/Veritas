// Variables

website = document.querySelector(".web-change");
analysis = ["<span style = 'font-weight:bold'>Left:  </span>"+
"These media sources are moderately to strongly biased toward liberal causes through story selection and/or political affiliation.  They may utilize strong loaded words (wording that attempts to influence an audience by using appeal to emotion or stereotypes), publish misleading reports and omit reporting of information that may damage liberal causes. Some sources in this category may be untrustworthy.",

"<span style = 'font-weight:bold'>Left-Center: </span>"+
"These media sources have a slight to moderate liberal bias.  They often publish factual information that utilizes loaded words (wording that attempts to influence an audience by using appeal to emotion or stereotypes) to favor liberal causes.  These sources are generally trustworthy for information, but may require further investigation.",

"<span style = 'font-weight:bold'>Center: </span>"+
"These sources have minimal bias and use very few loaded words (wording that attempts to influence an audience by using appeal to emotion or stereotypes).  The reporting is factual and usually sourced.  These are the most credible media sources.",

"<span style = 'font-weight:bold'>Right-Center: </span>"+
"These media sources are slightly to moderately conservative in bias. They often publish factual information that utilizes loaded words (wording that attempts to influence an audience by using appeal to emotion or stereotypes) to favor conservative causes. These sources are generally trustworthy for information, but may require further investigation. ",

"<span style = 'font-weight:bold'>Right: </span>"+
"These media sources are moderately to strongly biased toward conservative causes through story selection and/or political affiliation. They may utilize strong loaded words (wording that attempts to influence an audience by using appeal to emotion or stereotypes), publish misleading reports and omit reporting of information that may damage conservative causes. Some sources in this category may be untrustworthy.",
]



// On Load
website.innerHTML = "Starting...";











{
  buttons = document.querySelectorAll(".toggle-page");

  for(i = 0;i < buttons.length;i++){
      buttons[i].classList.toggle("toggle-page");
      buttons[i].classList.toggle("toggle-unusable");
  }
}

// Self Classification

function classifyThis(url){
  cl = ['972mag.com', 'abcnews.go.com', 'abc.net.au', 'abc11.com', 'abovethelaw.com', 'aceshowbiz.com', 'aclu.org', 'aeon.co', 'affinitymagazine.us', 'africanarguments.org', 'ahvalnews.com', 'beaconjournal.com', 'aljazeera.com', 'al-monitor.com', 'alhayat.com', 'almasdarnews.com', 'al-sura.com', 'guttmacher.org', 'timesunion.com', 'albertaviews.ca', 'allgov.com', 'alliedprogress.org', 'amny.com', 'americamagazine.org', 'americanimmigrationcouncil.org', 'mediabiasfactcheck.com', 'amnesty.org', 'adn.com', 'annistonstar.com', 'anthropocenemagazine.org', 'adl.org', 'aol.com', 'apmreports.org', 'aranews.net', 'tucson.com', 'azdailysun.com', 'azcentral.com', 'arktimes.com', 'armscontrol.org', 'citizen-times.com', 'asiancorrespondent.com', 'magazine.atavist.com', 'atlantablackstar.com', 'ajc.com', 'theatlantic.com', 'atlanticmedia.com', 'attn.com', 'statesman.com', 'austindailyherald.com', 'avclub.com', 'axios.com', 'backchannel.com', 'balkaninsight.com', 'baltimoresun.com', 'bangordailynews.com', 'baptistnews.com', 'battlecreekenquirer.com', 'bbc.com', 'bjreview.com', 'bellinghamherald.com', 'berkeleyside.com', 'berkshireeagle.com', 'billmoyers.com', 'bing.com', 'birminghammail.co.uk', 'bleacherreport.com', 'bloomberg.com', 'bluestemprairie.com', 'bostonglobe.com', 'bgr.com', 'brennancenter.org', 'brookings.edu', 'buffalonews.com', 'businessinsider.com', 'bustle.com', 'buzzfeed.com', 'calwatchdog.com', 'canadalandshow.com', 'capitalgazette.com', 'caribbeanlifenews.com', 'carnegieendowment.org', 'carolinapublicpress.org', 'catchnews.com', 'cbc.ca', 'boston.cbslocal.com', 'cbsnews.com', 'cctv-america.com', 'c4ads.org', 'cgdev.org', 'centerforinquiry.org', 'ciponline.org', 'cnas.org', 'populardemocracy.org', 'publicintegrity.org', 'cbpp.org', 'wvgazettemail.com', 'charlotteobserver.com', 'cheddar.com', 'chicagoreporter.com', 'chicago.suntimes.com', 'chinaafricaproject.com', 'america.cgtn.com/', 'citizentruth.org', 'legitgov.org', 'ctj.org', 'Citylab.com', 'citypages.com', 'cleantechnica.com', 'cnbc.com', 'cjr.org', 'colombiareports.com', 'investigaterussia.org', 'commoncause.org', 'commonwealmagazine.org', 'commonwealthfund.org', 'ctpost.com', 'consortiumnews.com', 'constitutionproject.org', 'councilforthenationalinterest.org', 'credoaction.com', 'crosscut.com', 'ctmirror.org', 'mirror.co.uk', 'dawn.com', 'dcreport.org', 'deadline.com', 'deccanherald.com', 'debunkingdenialism.com', 'delawareonline.com', 'democracy21.org', 'democratandchronicle.com', 'demos.org', 'denverpost.com', 'freep.com', 'zeit.de', 'digg.com', 'diply.com', 'diversityinc.com', 'dutchdailynews.com', 'dutchreview.com', 'dw.com', 'earth.columbia.edu', 'earthjustice.org', 'eastbaytimes.com', 'epi.org', 'economicshelp.org', 'egyptianstreets.com', 'elpais.com', 'elpasotimes.com', 'eff.org', 'emerging-europe.com', 'emirates247.com', 'emptywheel.net', 'engadget.com', 'ew.com', 'euobserver.com', 'euractiv.com', 'exposingtruth.com', 'factmyth.com', 'fair.org', 'fairvote.org', 'fastcompany.com', 'feministfrequency.com', 'fightforthefuture.org', 'fivethirtyeight.com', 'fpif.org', 'fwweekly.com', 'francetvinfo.fr', 'freakonomics.com', 'fresnobee.com', 'fusion.net', 'gaystarnews.com', 'glamour.com', 'globalcitizen.org', 'globalnews.ca', 'pri.org', 'globalrealnews.com', 'globalriskinsights.com', 'globaltimes.cn', 'gothamist.com', 'governing.com', 'whistleblower.org', 'govexec.com', 'greentechmedia.com', 'grist.org', 'gunviolencearchive.org', 'harpers.org', 'courant.com', 'harvardpolitics.com', 'health.com', 'healthyway.com', 'heavy.com', 'hs.fi', 'helsinkitimes.fi', 'hcn.org', 'highline.huffingtonpost.com', 'hindustantimes.com', 'historynewsnetwork.org', 'hollywoodreporter.com', 'civilbeat.org', 'staradvertiser.com', 'chron.com', 'hrw.org', 'humanium.org', 'icenews.is', 'ifamericaknew.org', 'independentaustralia.net', 'inews.co.uk', 'infobae.com', 'inquisitr.com', 'insideedition.com', 'insidehighered.com', 'insidephilanthropy.com', 'insider.com', 'insideclimatenews.org', 'imeu.org', 'ibtimes.com', 'icrw.org', 'crisisgroup.org', 'interpretermag.com', 'inverse.com', 'ipolitics.ca', 'irinnews.org', 'jacksonfreepress.com', 'japantoday.com', 'jihadica.com', 'jointcenter.org', 'helvidius.org', 'justsecurity.org', 'kansascity.com', 'kmov.com', 'knightfoundation.org', 'koco.com', 'kotaku.com', 'kuow.org', 'kurdistan24.net', 'laconiadailysun.com', 'lapresse.ca', 'repubblica.it', 'lastampa.it', 'latimes.com', 'lasvegassun.com', 'latintimes.com', 'lawandcrime.com', 'leftjustified.com', 'lethbridgeherald.com', 'kentucky.com', 'liberalmountain.com', 'lifehacker.com', 'liveleak.com', 'lamag.com', 'mainebeacon.com', 'mainichi.jp', 'maplight.org', 'mcclatchydc.com', 'mediafiledc.com', 'medium.com', 'metro.us', 'metro.co.uk', 'nhregister.com', 'mexiconewsdaily.com', 'miamiherald.com', 'mic.com', 'migrationpolicy.org', 'jsonline.com', 'startribune.com', 'minnpost.com', 'mintpressnews.com', 'news.mongabay.com', 'monthlyreview.org', 'themoscowtimes.com', 'motherjones.com', 'mnn.com', 'mtdemocrat.com', 'msn.com', 'muncievoice.com', 'mwcnews.net', 'nakedcapitalism.com', 'naplesnews.com', 'transequality.org', 'natmonitor.com', 'nationalnewswatch.com', 'nationalobserver.com', 'youthrights.org', 'resourcegovernance.org', 'nature.org', 'nbcnews.com', 'nbcnewyork.com', 'ncpolicywatch.com', 'ndtv.com', 'newamerica.org', 'neweurope.eu', 'newleftreview.org', 'newmatilda.com', 'newmoderate.com', 'nydailynews.com', 'nytimes.com', 'newsandgutsmedia.com', 'KFOR.com', 'newsdeeply.com', 'newsday.com', 'newser.com', 'newsy.com', 'nhk.or.jp/nhkworld/', 'npr.org', 'occupyindependents.com', 'ocweekly.com', 'oilandwaterdontmix.org', 'oneindia.com', 'opendemocracy.net', 'opposingviews.com', 'orlandosentinel.com', 'ourworldindata.org', 'outsidethebeltway.com', 'ozy.com', 'psmag.com', 'palmbeachdailynews.com', 'patrioticmillionaires.org', 'pbs.org', 'inquirer.com', 'inquirer.net', 'phillyvoice.com', 'phoenixnewtimes.com', 'politicalcritique.org', 'politicsthatwork.com', 'polygon.com', 'populationconnection.org', 'pressherald.com', 'pamplinmedia.com', 'positive.news', 'private-eye.co.uk', 'project-syndicate.org', 'propublica.org', 'prospectmagazine.co.uk', 'providencejournal.com', 'citizen.org', 'qz.com', 'rfa.org', 'newsobserver.com', 'rationalwiki.org', 'religionnews.com', 'rgj.com', 'represent.us', 'revealnews.org', 'rightweb.irc-online.org', 'heraldonline.com', 'rooseveltinstitute.org', 'rudaw.net', 'sacbee.com', 'sltrib.com', 'mysanantonio.com', 'sandiegoreader.com', 'sfchronicle.com', 'sfexaminer.com', 'sfglobe.com', 'mercurynews.com', 'sanluisobispo.com', 'independent.com', 'sapiens.org', 'saudigazette.com.sa', 'sciencing.com', 'scoopwhoop.com', 'scroll.in', 'seattlepi.com', 'seattletimes.com', 'secondnexus.com', 'sentencingproject.org', 'sfgate.com', 'shameproject.com', 'sojo.net', 'sootoday.com', 'scmp.com', 'sbs.com.au', 'spiegel.de', 'twincities.com', 'nj.com', 'silive.com', 'stepfeed.com', 'stopfake.org', 'stuff.co.nz', 'sunlightfoundation.com', 'swissinfo.ch', 'tabletmag.com', 'taiwannews.com.tw', 'tampabay.com', 'tarbell.org', 'taxjustice.net', 'taxpolicycenter.org', 'techcrunch.com', 'techdirt.com', 'texasmonthly.com', 'texastribune.org', 'asahi.com', 'theautomaticearth.com', 'thebaffler.com', 'budapestbeacon.com', 'tcf.org', 'thechristianleft.org', 'thecitizen.org.au', 'thecity.nyc', 'coloradosun.com', 'canadians.org', 'courier-journal.com', 'dailyclimate.org', 'dailyhive.com', 'dailytarheel.com', 'economictimes.indiatimes.com', 'forward.com', 'readfrontier.org', 'theguardian.com', 'thehilltalk.com', 'newsite.thehindu.com', 'independent.co.uk', 'theintercept.com', 'irishtimes.com', 'irrawaddy.com', 'lohud.com', 'koreatimes.co.kr', 'thelist.com', 'themoderatevoice.com', 'nationinstitute.org', 'alaraby.co.uk', 'thenewtropic.com', 'thenewstribune.com', 'theodysseyonline.com', 'theolympian.com', 'palmbeachpost.com', 'pennlive.com', 'cleveland.com', 'pressdemocrat.com', 'pulsegulfcoast.com', 'theringer.com', 'thesaturdaypaper.com.au', 'theskimm.com', 'thestate.com', 'thestranger.com', 'thesunmagazine.org', 'smh.com.au', 'thetab.com', 'thetrace.org', 'thetyee.ca', 'thevarsity.ca', 'theverge.com', 'pilotonline.com', 'theweek.co.uk', 'wilderness.org', 'thewire.in', 'thisisthezerohour.com', 'thewrap.com', 'news.trust.org', 'thrillist.com', 'time.com', 'timesheadline.com', 'timesofisrael.com', 'nola.com', 'tmz.com', 'toinformistoinfluence.com', 'tomdispatch.com', 'thestar.com', 'uawire.org', 'unicornriot.ninja', 'ucsusa.org', 'uft.org', 'universitybusiness.com', 'urban.org', 'usatoday.com', 'usnews.com', 'uticaod.com', 'variety.com', 'vice.com', 'victoriaadvocate.com', 'virginiamercury.com', 'votevets.org', 'vulture.com', 'walesonline.co.uk', 'washingtonblade.com', 'washingtonmonthly.com', 'washingtonpost.com', 'westernmassnews.com', 'wgntv.com', 'wikileaks.org', 'wingsoverscotland.com', 'wired.com', 'wnyc.org', 'wilsoncenter.org', 'worldpolicy.org', 'worldcrunch.com', 'wsvn.com', 'news.cn', 'news.yahoo.com', 'yaleglobal.yale.edu', 'ynetnews.com', 'ydr.com', 'yorkdispatch.com', 'youthradio.org']
  cr = ['7news.com.au', '71republic.com', 'theadvocates.org', 'ac2news.com', 'english.ahram.org.eg', 'abqjournal.com', 'americanactionforum.org', 'americanaffairsjournal.org', 'americanfirearms.org', 'aier.org', 'americasquarterly.org', 'antiwar.com', 'arabnews.com', 'arcamax.com', 'arkansasonline.com', 'aninews.in', 'atlanticcouncil.org', 'beinglibertarian.com', 'berlingske.dk', 'bild.de', 'billingsgazette.com', 'bipartisanpolicy.org', 'bostonherald.com', 'breakingdefense.com', 'thebreakthrough.org', 'bt.dk', 'businesslive.co.za', 'calgaryherald.com', 'californiaglobe.com', 'capoliticalreview.com', 'campaignforliberty.org', 'cjnews.com', 'taxpayer.com', 'capitalismmagazine.com', 'cato.org', 'ccn.com', 'cftni.org', 'checkyourfact.com', 'chicagotribune.com', 'christianitytoday.com', 'cincinnati.com', 'gazette.com', 'columbiadailyherald.com', 'dispatch.com', 'dailyherald.com', 'dailypress.com', 'dailyo.in', 'dallasnews.com', 'volkskrant.nl', 'deccanchronicle.com', 'deseretnews.com', 'desertsun.com', 'detroitnews.com', 'welt.de', 'downsizinggovernment.org', 'edmontonjournal.com', 'edmontonsun.com', 'expressen.se', 'faithfamilyamerica.com', 'longwarjournal.org', 'financialpost.com', 'fitsnews.com', 'jacksonville.com', 'forbes.com', 'foreignpolicyi.org', 'fpri.org', 'star-telegram.com', 'fortnightlyreview.co.uk', 'fortune.com', 'fee.org', 'foxbusiness.com', 'franklincenterhq.org', 'fraserinstitute.org', 'freedomalliance.org', 'freedomhouse.org', 'gp.se', 'mlive.com', 'gulfnews.com', 'guns.com', 'heterodoxacademy.org', 'hpenews.com', 'thehindubusinessline.com', 'honestreporting.com', 'hoover.org', 'humanprogress.org', 'ilgiornale.it', 'inhomelandsecurity.com', 'indiatimes.com/', 'insidesources.com', 'theihs.org', 'independent.ie', 'israelhayom.com', 'itv.com', 'jpost.com', 'jewishbreakingnews.com', 'jewishjournal.com', 'jns.org', 'justfacts.com', 'justfactsdaily.com', 'koreaherald.com', 'kutv.com', 'lmtonline.com', 'reviewjournal.com', 'learnliberty.org', 'leicestermercury.co.uk', 'lexingtoninstitute.org', 'libertarianism.org', 'listverse.com', 'standard.co.uk', 'lfpress.com', 'dailynews.com', 'lynx.media', 'mackinac.org', 'macleans.ca', 'manilatimes.net', 'marginalrevolution.com', 'marketwatch.com', 'mercatus.org', 'montrealgazette.com', 'mynorthwest.com', 'nationalaffairs.com', 'nationalinterest.org', 'nationalpost.com', 'nos.nl', 'observer.com', 'nypost.com', '.news.com.au', 'newsheist.com', 'newsrescue.com', 'news-gazette.com', 'nhk.or.jp', 'opendoorsusa.org', 'oregonlive.com', 'ottawacitizen.com', 'ottawasun.com', 'pacificresearch.org', 'peninsuladailynews.com', 'post-gazette.com', 'triblive.com', 'policyed.org', 'punchingbagpost.com', 'rstreet.org', 'rasmussenreports.com', 'realcleardefense.com', 'realclearinvestigations.com', 'realclearpolicy.com', 'realclearpolitics.com', 'realclearreligion.org', 'reason.com', 'valleynewslive.com', 'leaderpost.com', 'remingtonresearchgroup.com', 'republicworld.com', 'srnnews.com', 'sbsun.com', 'thestarphoenix.com', 'savannahnow.com', 'sofrep.com', 'studentnewsdaily.com', 'tallahassee.com', 'taxfoundation.org', 'tharawat-magazine.com', 'algemeiner.com', 'theamericanconservative.com', 'the-american-interest.com', 'chronicle.augusta.com', 'theaustralian.com.au', 'thebrunswicknews.com', 'thebulwark.com', 'thechronicleherald.ca', 'couriermail.com.au', 'thedispatch.com', 'durangoherald.com', 'theecjournal.com', 'thefiscaltimes.com', 'independent.org', 'thejacknews.com', 'the-japan-news.com', 'jewishpress.com', 'theledger.com', 'thelibertarianrepublic.com', 'nation.com.pk', 'thenewatlantis.com', 'international.thenewslens.com', 'theobjectivestandard.com', 'oklahoman.com', 'pe.com', 'thequint.com', 'thesmokinggun.com', 'thesorrentino.com', 'spokesman.com', 'straitstimes.com', 'thestreet.com', 'theitem.com', 'timesofindia.indiatimes.com', 'thetimes.co.uk', 'washingtoninstitute.org', 'thewest.com.au', 'yomiuri.co.jp', 'timeslive.co.za', 'toledoblade.com', 'cjonline.com', 'valuewalk.com', 'vancouversun.com', 'wsj.com', 'rep-am.com', 'kansas.com', 'sungazette.com', 'news-herald.com', 'windsorstar.com', 'cbs12.com', 'yankeeinstitute.org', 'zebrafactcheck.com']
  c = ['9news.com', '12news.com', '38north.org', '680news.com', '1010wins.radio.com', 'abc12.com', 'news.abs-cbn.com', 'adfontesmedia.com', 'africacheck.org', 'africanews.com', 'agerpres.ro', 'agweb.com', 'airwars.org', 'english.alarabiya.net', 'albawaba.com', 'eng.majalla.com', 'alreporter.com', 'altoday.com', 'democratherald.com', 'ad.nl', 'securingdemocracy.gmfus.org', 'amarillo.com', 'americanheritage.com', 'americanmilitarynews.com', 'news.amomama.com', 'independentmail.com', 'arcdigital.media', 'azcapitoltimes.com', 'arstechnica.com', 'courier-tribune.com', 'atimes.com', 'apnews.com', 'atlasobscura.com', 'ballotpedia.org', 'bangkokpost.com', 'baxterbulletin.com', 'en.bbarta24.net', 'belfercenter.org', 'bnd.com', 'bellingcat.com', 'bettergov.org', 'bignewsnetwork.com', 'bigthink.com', 'bismarcktribune.com', 'us.blastingnews.com', 'bleepingcomputer.com', 'bnonews.com', 'bridgemi.com', 'bringmethenews.com', 'thebulletin.org', 'bullshido.net', 'business2community.com', 'c-span.org', 'capecodtimes.com', 'capitolfax.com', 'trib.com', 'castanet.net', 'cdt.org', 'opensecrets.org', 'csis.org', 'channelnewsasia.com', 'charitynavigator.org', 'timesfreepress.com', 'chinookobserver.com', 'csmonitor.com', 'cityandstateny.com', 'cnet.com', 'crfb.org', 'ced.org', 'cpj.org', 'concordmonitor.com', 'congress.gov', 'constitutioncenter.org', 'consumerreports.org', 'consumerist.com', 'cookpolitical.com', 'corriere.it', 'cfr.org', 'countable.us', 'courthousenews.com', 'covidtracking.com', 'cp24.com', 'crimeola.com', 'ctvnews.ca', 'dccircuitbreaker.org', 'dailybusinessreview.com', 'dailymaverick.co.za', 'dailyrecord.com', 'darientimes.com', 'daytondailynews.com', 'defensenews.com', 'defenseone.com', 'delrionewsherald.com', 'desmoinesregister.com', 'differencebetween.net', 'digitaljournal.com', 'doctorswithoutborders.org', 'dpa-international.com', 'duluthnewstribune.com', 'leadertelegram.com', 'ejinsight.com', 'elnuevodia.com', 'goerie.com', 'eurasiagroup.net', 'eurasiareview.com', 'euronews.com', 'everycrsreport.com', 'factcheck.org', 'factscan.ca', 'factwire.org', 'fairobserver.com', 'federalnewsnetwork.com', 'federaltimes.com', 'financialexpress.com', 'ft.com', 'firstcoastnews.com', 'firstdraftnews.org', 'foreignaffairs.com', 'foreignpolicy.com', 'fosters.com', 'france24.com', 'freewheelus.com', 'fullfact.org', 'gainesville.com', 'gallup.com', 'gbtimes.com', 'geek.com', 'globalintegrity.org', 'globalslaveryindex.org', 'goodnewsnetwork.org', 'govtrack.us', 'greatfallstribune.com', 'greenbaypressgazette.com', 'greenvilleonline.com', 'group30.org', 'hanfordsentinel.com', 'hbr.org', 'news.harvard.edu', 'healthcarefinancenews.com', 'herald-review.com', 'hoax-slayer.com', 'homelandsecuritynewswire.com', 'i24news.tv', 'icitizen.com', 'idahostatesman.com', 'imediaethics.org', 'inc.com', 'indexmundi.com', 'indiatoday.intoday.in', 'indystar.com', 'dailybulletin.com', 'icij.org', 'iea.org', 'journals.cambridge.org', 'freemedia.at', 'rescue.org', 'ire.org', 'investopedia.com', 'jacksonsun.com', 'janes.com', 'japantimes.co.jp', 'journalgazette.net', 'daily.jstor.org', 'justicedenied.org', 'kff.org', 'kait8.com', 'kdvr.com', 'knowyourmeme.com', 'knowherenews.com', 'knoxnews.com', 'ktla.com', 'ktuu.com', 'ktva.com', 'news9.com', 'ledevoir.com', 'lansingstatejournal.com', 'lcsun-news.com', 'law.com', 'law360.com', 'lawfareblog.com', 'leadstories.com', 'ldnews.com', 'limacharlienews.com', 'journalstar.com', 'lompocrecord.com', 'makeuseof.com', 'mediashift.org', 'memeorandum.com', 'mentalfloss.com', 'en.mercopress.com', 'merionwest.com', 'metabunk.org', 'metrowestdailynews.com', 'military.com', 'militarytimes.com', 'missoulian.com', 'mtstandard.com', 'morningconsult.com', 'napavalleyregister.com', 'nber.org', 'followthemoney.org', 'nationaljournal.com', 'nationmaster.com', 'navytimes.com', 'theneed2know.com', 'newbernsj.com', 'nzherald.co.nz', 'newsandnews.com', 'newslookup.com', 'newsela.com', 'newsguardtech.com', 'YourNewsNet.com', 'newsnow.co.uk', 'nst.com.my', 'nextgov.com', 'niskanencenter.org', 'nknews.org', 'nolabels.org', 'noozhawk.com', 'northkoreatimes.com', 'nwfdailynews.com', 'nwitimes.com', 'novinite.com', 'oilprice.com', '180report.com', 'openthegovernment.org', 'ocregister.com', 'oyez.org', 'guampdn.com', 'patch.com', 'patheos.com', 'pnj.com', 'pjstar.com', 'pgpf.org', 'piie.com', 'pewresearch.org', 'placesjournal.org', 'poconorecord.com', 'mavenroundtable.io', 'politicalwire.com', 'politico.com', 'politifact.com', 'polygraph.info', 'poynter.org', 'prnewswire.mediaroom.com', 'procon.org', 'pogo.org', 'publicpolicypolling.com', 'prri.org', 'qctimes.com', 'rferl.org', 'rand.org', 'rapidcityjournal.com', 'recode.net', 'relevantmagazine.com', 'rsf.org', 'reporterslab.org', 'reuters.com', 'riverdalepress.com', 'rollcall.com', 'russialies.com', 'sandiegouniontribune.com', 'sanmarcosrecord.com', 'santamariatimes.com', 'heraldtribune.com', 'sayfiereview.com', 'sciencedebate.org', 'scoopnest.com', 'scotusblog.com', 'shareably.net', 'shorensteincenter.org', 'shreveporttimes.com', 'simplepolitics.co.uk', 'siouxcityjournal.com', 'news.sky.com', 'smartnews.com', 'snopes.com', 'sun-sentinel.com', 'ny1.com', 'spectrumreport.com', 'sctimes.com', 'stripes.com', 'statesmanjournal.com', 'stimson.org', 'stocknewsusa.com', 'strategypage.com', 'stratfor.com', 'taipeitimes.com', 'taskandpurpose.com', 'techstartups.com', 'texasstandard.org', 'thatsnonsense.com', 'auburnpub.com', 'afr.com', 'thebalance.com', 'thebureauinvestigates.com', 'thecanadianpress.com', 'chinapost.com.tw', 'chronicle.com', 'thecipherbrief.com', 'theconversation.com', 'thedailycentrist.com', 'daily-chronicle.com', 'dailygazette.com', 'dailynorthwestern.com', 'dailyprogress.com', 'defconwarningsystem.com', 'thediplomat.com', 'economist.com', 'fakenewscodex.com', 'theflipside.io', 'thehill.com', 'thehumanist.com', 'indianexpress.com', 'thejakartapost.com', 'jamestown.org', 'jordantimes.com', 'journalstandard.com', 'macon.com', 'themarshallproject.org', 'memepoliceman.com', 'soas.ac.uk', 'themoderatedmedia.com', 'modbee.com', 'mcall.com', 'thenevadaindependent.com', 'thenews.com.pk', 'thenewsliteracyproject.org', 'observatory.journalism.wisc.edu', 'pantagraph.com', 'phnompenhpost.com', 'postandcourier.com', 'poststar.com', 'scotsman.com', 'sociable.co', 'thesouthern.com', 'thestrategybridge.org', 'tennessean.com', 'thetandd.com', 'thetowntalk.com', 'truthsetter.com', 'vindy.com', 'wcfcourier.com', 'thejournal.ie', 'thirdway.org', 'thoughtco.com', 'timesofsandiego.com', 'todayifoundout.com', 'transparency.org', 'transpartisanreview.com/', 'tribunecontentagency.com', 'tri-cityherald.com', 'truthbetold.news', 'truthorfiction.com', 'tvw.org', 'undark.org', 'house.gov', 'usaspending.gov', 'usafacts.org', 'standard.net', 'verafiles.org', 'viralthread.com', 'vocativ.com', 'voanews.com', 'voiceofsandiego.org', 'vosizneias.com', 'votesmart.org', 'wacotrib.com', 'warontherocks.com', 'wearethemighty.com', 'en.wikinews.org', 'wikipedia.org', 'wikitribune.com', 'host.madison.com', 'fox35orlando.com', 'weforum.org', 'wn.com', 'worldometers.info', 'worldpoliticsreview.com', 'worldpopulationreview.com', 'worldpress.org', 'wsaz.com', 'fox29.com', 'zdnet.com']
  l = ['achnews.org', 'act.tv', 'aftonbladet.se', 'aldianews.com', 'afj.org', 'altnews.in', 'alternet.org', 'aidc.org.za', 'americablog.com', 'americanbridgepac.org', 'americannewsx.com', 'americanoversight.org', 'au.org', 'angrywhitemen.org', 'antifascistnews.net', 'autostraddle.com', 'citypaper.com', 'ebar.com', 'themaven.net', 'bitchmedia.org', 'blackagendareport.com', 'blacklivesmatter.com', 'bluestatedaily.com', 'boingboing.net', 'bostonreview.net', 'bust.com', 'canadafactcheck.ca', 'canadiandimension.com', 'capitalandmain.com', 'care2.com', 'ceasefiremagazine.co.uk', 'americanprogress.org', 'prwatch.org', 'c4ss.org', 'change.org', 'chicagoreader.com', 'china.org.cn', 'chroniclesofdemocracy.com', 'citizencritics.org', 'cnn.com', 'codepink.org', 'columbusfreepress.com', 'commondreams.org', 'copblock.org', 'cosmopolitan.com', 'countercurrents.org', 'counterpunch.org', 'crikey.com.au', 'crimethinc.com', 'crooked.com', 'crooksandliars.com', 'currentaffairs.org', 'curvemag.com', 'thedailybeast.com', 'dailydot.com', 'dailycos.com', 'dailysoundandfury.com', 'dallasvoice.com', 'deadstate.org', 'deadspin.com', 'deathandtaxesmag.com', 'deepsouthvoice.com', 'democracychronicles.org', 'democracynow.org', 'democraticunderground.com', 'deshabhimani.com', 'desmogblog.com', 'dissentmagazine.org', 'drudge.com', 'earthfirstjournal.org', 'egbertowillies.com', 'electoral-vote.com', 'electronicintifada.net', 'elisabethparker.com', 'elitedaily.com', 'esquire.com', 'everydayfeminism.com', 'evonomics.com', 'feministcurrent.com', 'feministing.com', 'thefifthcolumnnews.com', 'fifthestate.org', 'filmingcops.com', 'finnishnews.fi', 'firstpost.com', 'foodandwaterwatch.org', 'foreignpolicyjournal.com', 'foreignpolicynews.org', 'freepress.org', 'frnewsreport.com', 'ffrf.org', 'freedomnews.org.uk', 'frontpagelive.com', 'Freespeech.org', 'geopoliticsalert.com', 'gizmodo.com', 'globalvoices.org', 'good.is', 'gq.com', 'bradford-delong.com', 'greenleft.org.au', 'greenvillegazette.com', 'gritpost.com', 'guardianlv.com', 'theguardiansofdemocracy.com', 'haaretz.com', 'hillreporter.com', 'huffingtonpost.com', 'hrc.org', 'marxist.com', 'inthesetimes.com', 'inequalitymedia.org', 'ips-dc.org', 'internationalviewpoint.org', 'intrepidreport.com', 'iowastartingline.com', 'itsgoingdown.org', 'jacobinmag.com', 'jezebel.com', 'latest.com', 'lavendermagazine.com', 'laweekly.com', 'leftfootforward.org', 'leftoverrights.com', 'leftvoice.org', 'leftscoop.com', 'lgbtqnation.com', 'libcom.org', 'liberalamerica.life', 'liberalexaminer.com', 'samuel-warde.com', 'liberationnews.org', 'littlegreenfootballs.com', 'mashable.com', 'meanlefthook.com', 'mediamatters.org', 'mediaite.com', 'meduza.io', 'merryjane.com', 'miaminewtimes.com', 'middleeastmonitor.com', 'modernliberals.com', 'molad.org', 'mondoweiss.net', 'moonofalabama.org', 'msnbc.com', 'nationofchange.org', 'nrdc.org', 'newint.org', 'newpol.org', 'newrepublic.com', 'newstatesman.com', 'amsterdamnews.com', 'nymag.com', 'newyorker.com', 'newscorpse.com', 'newshounds.us', 'newslogue.com', 'newsone.com', 'newsweek.com', 'north99.org', 'nova-magazine.net', 'nowtoronto.com', 'occupy.com', 'onegreenplanet.org', 'out.com', 'palmerreport.com', 'pastemagazine.com', 'peacock-panache.com', 'people.com', 'photographyisnotacrime.com', 'pinknews.co.uk', 'politicaldig.com', 'politicaltribune.org', 'politicususa.com', 'politizoom.com', 'popular.info', 'popularresistance.org', 'pressprogress.ca', 'progressivearmy.com', 'progressiveliberal.net', 'projectcensored.org', 'proudemocrat.com', 'putintrump.org', 'queerty.com', 'rabble.ca', 'rantt.com', 'rappler.com', 'rawprogressive.com', 'rawstory.com', 'readingthepictures.org', 'therealnews.com', 'redpepper.org.uk', 'redstatedisaster.com', 'redyouth.org', 'refinery29.com', 'republicanssucks.org', 'republicreport.org', 'revcom.us', 'reverbpress.news', 'rewire.news', 'rightwingwatch.org', 'trofire.com', 'rollingstone.com', 'salon.com', 'scarymommy.com', 'shadowproof.com', 'shareblue.com', 'shondaland.com', 'slate.com', 'readsludge.com', 'worldsocialism.org', 'socialistworker.org', 'sourcepolitics.com/', 'sourcewatch.org', 'splcenter.org', 'splinternews.com', 'stpete4peace.org', 'syriana-analysis.com', 'takepart.com', 'talkingpointsmemo.com', 'teenvogue.com', 'telesurtv.net', 'advocate.com', 'americanindependent.com', 'prospect.org', 'austinchronicle.com', 'blue-route.org', 'theburningspear.com', 'climaterealityproject.org', 'daily49er.com', 'thedailybanter.com', 'the-daily.buzz', 'thedailyvox.co.za', 'democratichub.com', 'thedodo.com', 'dworkinreport.com', 'theestablishment.co', 'thefloridasqueeze.com', 'thefrisky.com', 'thefingnews.com', 'ghionjournal.com', 'theimproper.com', 'indypendent.org', 'theintellectualist.co', 'thelily.com', 'thelondoneconomic.com', 'themarysue.com', 'themilitant.com', 'morningstaronline.co.uk', 'thenation.com', 'nationalmemo.com', 'thenewcivilrightsmovement.com', 'theoutline.com', 'palestinechronicle.com', 'progressive.org', 'progressivefrontier.com', 'samefacts.com', 'theroot.com', 'thesternfacts.com', 'texasobserver.org', 'villagevoice.com', 'thewalrus.ca', 'theweek.com', 'worldcantwait.net', 'thegrio.com', 'theoswatch.com', 'thinkprogress.org', 'this.org', 'towleroad.com', 'treehugger.com', 'tribunemagazine.org', 'truthagainstthemachine.com', 'truthdig.com', 'truthout.org', 'uproxx.com', 'upworthy.com', 'vanityfair.com', 'verifiedpolitics.com', 'vermontindependent.org', 'verrit.com', 'viraltitle.com', 'vox.com', 'wallstreetonparade.com', 'washingtonbabylon.com', 'washingtonpress.com', 'washingtonsources.org', 'washingtonian.com', 'wearyourvoicemag.com', 'wehuntedthemammoth.com', 'whatmattersnews.com', 'whitehousewatch.com', 'whowhatwhy.org', 'wonkette.com', 'workers.org', 'wsws.org', 'yesmagazine.org', 'tytnetwork.com', 'yourblackworld.net', 'zcomm.org']
  r = ['breitbart', 'whitehouse.gov', '2ndvote.com', 'aim.org', 'acting-man.com', 'altnewsmedia.net', 'americarisingpac.org', 'americanconsequences.com', 'aei.org', 'americansforprosperity.org', 'afpc.org', 'amgreatness.com', 'americanlibertyreport.com', 'spectator.org', 'amimagazine.org', 'ammoland.com', 'aa.com.tr', 'arizonadailyindependent.com', 'armstrongeconomics.com', 'aina.org', 'axiomnewsnetwork.com', 'bearingarms.com', 'beliefnet.com', 'bizpacreview.com', 'blabber.buzz', 'bluelivesmatter.blue', 'boundingintocomics.com', 'brexitcentral.com', 'buzzsawpolitics.com', 'calgarysun.com', 'ca-political.com', 'campaignlifecoalition.com', 'campusreform.org', 'capitalresearch.org', 'chicksontheright.com', 'cc.org', 'christianheadlines.com', 'christiannewsalerts.com', 'christianpost.com', 'christiantoday.com', 'chroniclesmagazine.org', 'citizenfreepress.com', 'citizensunited.org', 'city-journal.org', 'nccivitas.org', 'claremont.org', 'colddeadhands.us', 'commentarymagazine.com', 'commdiginews.com', 'conservativebase.com', 'conservativedailynews.com', 'conservativehq.com', 'conservativeinstitute.org', 'conservativeopinion.com', 'conservativereview.com', 'conservativetoday.com', 'cowgernation.com', 'crimeresearch.org', 'crisismagazine.com', 'dailycaller.com', 'express.co.uk', 'thedailyliberator.com', 'dailysignal.com', 'dailysurge.com', 'dcstatesman.com', 'dailytorch.com', 'dcwhispers.com', 'debatepost.com', 'telegraaf.nl', 'disrn.com', 'dmlnews.com', 'eagleactionreport.com', 'economicpolicyjournal.com', 'egypttoday.com', 'energycitizens.org', 'erlc.com', 'factsandlogic.org', 'faithwire.com', 'fakehatecrimes.org', 'farleftwatch.com', 'federalistpress.com', 'fedsoc.org', 'firstinfreedomdaily.com', 'firstthings.com', 'defenddemocracy.org', 'foxnews.com', 'freerepublic.com', 'freewestmedia.com', 'freedomcrossroads.com/', 'freedomworks.org', 'ff.org', 'futureinamerica.com', 'getreligion.org', 'gopusa.com', 'g-a-i.org', 'news.grabien.com', 'greatamericanpolitics.com', 'order-order.com', 'heatst.com', 'heritage.org', 'hermancain.com', 'hotair.com', 'hudson.org', 'humanevents.com', 'hurriyet.com.tr', 'hurriyetdailynews.com', 'ibleedredwhiteblue.com', 'illinoispolicy.org', 'imprimis.hillsdale.edu', 'ijr.com', 'independentsentinel.com', 'iwf.org', 'influencewatch.org', 'ifstudies.org', 'intellectualtakeout.org', 'investors.com', 'ipatriot.com', 'jewishpolicycenter.org', 'jewishworldreview.com', 'judicialnetwork.com', 'justthenews.com', 'kansaspolicy.org', 'lawenforcementtoday.com', 'legalinsurrection.com', 'libertyhangout.org', 'libertyheadlines.com', 'libertynation.com', 'libertynews.com', 'libertytalk.fm', 'fightpp.org', 'lifenews.com', 'lifezette.com', 'loneconservative.com', 'louderwithcrowder.com', 'lozierinstitute.org', 'lyincomey.com', 'unionleader.com', 'manhattan-institute.org', 'mediacircus.com', 'mediaequalizer.com', 'mediatrackers.org', 'mercatornet.com', 'milliyet.com.tr', 'mises.org', 'nationalcenter.org', 'nationalreview.com', 'newbostonpost.com', 'newrevolutionnow.org', 'newsbusters.org', 'newsmax.com', 'noqreport.com', 'notliberal.com', 'nraila.org', 'ntknetwork.com', 'numbersusa.com', 'offendedamerica.com', 'offgridsurvival.com', 'oann.com', 'oneangrygamer.net', 'onenewsnow.com', 'ontarioproud.ca', 'opslens.com', 'panampost.com', 'pantsonfirenews.com', 'patriotnewsalerts.com', 'patriotnewsdaily.com', 'patriotretort.com', 'pluralist.com', 'politicalite.com', 'politichicks.com', 'politicsnote.com', 'politifeed.net', 'politisite.com', 'populistwire.com', 'powerlineblog.com', 'projectveritas.com', 'conservativesus.party', 'publicinterestlegal.org', 'quadrant.org.au', 'rd.com', 'redalertpolitics.com', 'redflagnews.com', 'renewedright.com', 'resistancemedia.org', 'restoreamericanglory.com', 'ricochet.com', 'rightandfree.com', 'ronpaullibertyreport.com', 'sabah.com.tr', 'savejersey.com', 'secureamericanow.org', 'sentinelksmo.org', 'silenceisconsent.net', 'sbgi.net', 'sonorannews.com', 'southernpatriotnews.com', 'spiked-online.com', 'standpointmag.co.uk', 'starpolitical.com/', 'teapartypatriots.org', 'tenthamendmentcenter.com', 'adelaidenow.com.au', 'americanmind.org', 'theblacksphere.net', 'theblaze.com', 'carepublican.com', 'thecitizenpress.com', 'thecollegefix.com', 'theconservativenut.gop', 'conservativewoman.co.uk', 'thedailydefender.com', 'dailywire.com', 'dc-chronicle.com', 'theepochtimes.com', 'thefederalist.com', 'thehayride.com', 'themilreview.com', 'thenewamerican.com', 'newlypress.com', 'thenewrevere.com', 'theohiostar.com', 'patriotpost.us', 'thepostmillennial.com', 'therantidote.com', 'therealstrategy.com', 'rebelnews.com', 'theresurgent.com', 'therightscoop.com', 'ronpaulinstitute.org', 'thesun.co.uk', 'tennesseestar.com', 'thetruthaboutguns.com', 'torontosun.com', 'townhall.com', 'tribunist.com', 'trtworld.com', 'twitchy.com', 'unwatch.org', 'unitynewsnetwork.co.uk', 'updateamerica.com', 'usapoliticstoday.com', 'ussanews.com', 'vesselnews.io', 'vivaliberty.com', 'washingtonexaminer.com', 'freebeacon.com', 'weaselzippers.us', 'weeklystandard.com', 'westernfreepress.com', 'westmonster.com', 'whatfinger.com', 'whitehouse.gov', 'world.wng.org', 'worldtribune.com', 'yellowhammernews.com', 'youngcons.com']
  
  for (site of l){
      if (url.includes(site))
          return -2;
  }
  for (site of cl){
      if (url.includes(site))
          return -1;
  }
  for (site of c){
      if (url.includes(site))
          return 0;
  }
  for (site of cr){
      if (url.includes(site))
          return 1;
  }
  for (site of r){
      if (url.includes(site))
          return 2;
  }
  return null;
}

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  n = classifyThis(tabs[0].url);
  if (n != null) {
  	//--------------------------------------------------------------------------------------------------------------
  	document.querySelector(".descript").innerHTML = analysis[n+2];
  	console.log(analysis[n+2])
  	console.log("reached!");
    // document.getElementsByClassName("links")[n+2].classList.toggle("toggle-page");

  }
});



// Other Stuff

async function getKeyWords(title) {
    const url = "https://api.monkeylearn.com/v3/extractors/ex_YCya9nrn/extract/";

    const options = {
        method: "POST",
        headers: {
            'Authorization': 'Token 817013dbeb508e1c7eef9995ad9cacc76b0d2ea4',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            'data': [title]
        })
    };

    myStr = ""

    await fetch(url, options)
    .then( res => res.json() )
    .then( data => data[0]["extractions"].forEach( x => (myStr += x["parsed_value"] + ' ') ) );

    return myStr.trim();
}

async function getLink(query, party){
    searchID = '';
    switch (party){
      case -2: // Left
        searchID = "001353002542932097746:svp8c0cxzfo";
        break;
      case -1: // Left-Center
        searchID = "001353002542932097746:oygeymvug1r";
        break;
      case 0: // Center
        searchID = "001353002542932097746:6yewk3wo5u3";
        break;
      case 1: // Right-Center
        searchID = "001353002542932097746:n7uanglivao";
        break;
      case 2: // Right
        searchID = "001353002542932097746:our9mmmupxd";
        break;
    }
    const key = "AIzaSyDNTFxPQb8mnDJunKBNHmMTnuvLQaoKR8Q";
    const url = 'https://customsearch.googleapis.com/customsearch/v1?cx=' + searchID + '&num=1' + '&q=' + query + '&key=' + key;
  
    const options = {
        method: "GET",
        headers: {
            'Accept': 'application/json'
        }
    }; 
  
    theLinks = ""
  
    await fetch(url, options)
    .then( res => res.json() )
    .then(data => (theLinks = data["items"]));
    // .then(data => (theLink = data["items"][0].link));
  

    if (theLinks.length < 1) {
      console.log("No results");
      return -1;
    } else {
      // Check that the returned links titles contain at least 50% of the keywords
      A = query.split(' ').map( s => s.toLowerCase() );
      B = theLinks[0].title.toLowerCase();
      cnt = 0;
      for (word of A) {
        if (B.includes(word))
          cnt += 1;
      }

      console.log(theLinks[0].link);
      console.log(A);
      console.log(B);
      console.log("");


      if (cnt >= A.length/2 || cnt >=2) {
      // if (cnt >= A.length/2) {
        return theLinks[0].link;
      } else {
        return -1;
      }
    }
}

chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.sendRequest(tab.id, {action: "getDOM"}, async function(response) {
    kWs = await getKeyWords(response.dom);
    
    console.log(kWs);
    
    website.innerHTML = "Loading Recommendations.";
    buttons = document.getElementsByClassName("links");
    
    for(i = 0; i < buttons.length; i++) {
      
      link = await getLink(kWs, i-2);
      if (link == -1){
        // disable
        // buttons[i].removeAttribute("href");
        buttons[i].classList.toggle("toggle-unusable");
      } else {
        buttons[i].href = link;
      }

      website.innerHTML = "Loading Recommendations." + ".".repeat(i+1);
    }
    
    website.innerHTML = "Done";

  });
});