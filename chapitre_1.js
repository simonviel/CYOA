// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

//Globals var required throughout the Chapter
var nb_attr_increase = 0;
var nb_talent_increase = 0;
var nb_knowledge_increase = 0;

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
  s_1: new undum.SimpleSituation(
    "<p class='transient'></p><p class='transient'>Le récit que vous vous apprêtez à entamer raconte comment un jeune Yédinite du nom de  Majaïn s'est taillé une place au sein de la Compagnie des Intouchables lors de la prise du fort Kepir en l'an 1213, le 18e jour d’Ab-Adrin. Sont histoire sera, en quelque sorte, la vôtre. Les choix moraux, stratégiques et personnels de Majaïn dépendront de vos propres choix.</p><br>\
    \
    <p class='transient'>Avant de débuter, définissez les <b>Attributs</b>, <b>Talents</b> et <b>Savoirs</b> que Majaïn aurait développé, de sa jeunesse jusqu’au moment de la bataille de Kepir. Une description de chacun d'eux est disponible dans la section <em>Règles</em>. Vous devez placer 5 points dans les <b>Attributs</b>, 4 dans les <b>Talents</b> et 3 dans les <b>Savoirs</b>. À l'heure actuelle, Majaïn ne peut avoir plus de 3 points totaux dans une même catégorie.</p><br>\
    \
    <div class='make_npc'>\
    \
    <div id='attributes'>\
    \
    <p class='transient'>1. Débutez avec les <b>Attributs</b>:</p><br>\
    \
    <p class='transient'><a href='./martial_boost'>&#8607 <b>Martial</b></a> / <a href='./martial_decrease'>&#8609 <b>Martial</b></a></p><br>\
    \
    <p class='transient'><a href='./instinct_boost'>&#8607 <b>Instinct</b></a> / <a href='./instinct_decrease'>&#8609 <b>Instinct</b></a></p><br>\
    \
    <p class='transient'><a href='./intel_boost'>&#8607 <b>Intelligence</b></a> / <a href='./intel_decrease'>&#8609 <b>Intelligence</b></a></p><br>\
    \
    <p class='transient'><a href='./soc_boost'>&#8607 <b>Social</b></a> / <a href='./soc_decrease'>&#8609 <b>Social</b></a></p><br>\
    \
    <p class='transient'><a href='./prow_boost'>&#8607 <b>Prouesse</b></a> / <a href='./prow_decrease'>&#8609 <b>Prouesse</b></b></a></p><br>\
    \
    <p class='transient'><a href='./vig_boost'>&#8607 <b>Vigueur</b></a> / <a href='./vig_decrease'>&#8609 <b>Vigueur</b></b></a></p><br>\
    \
    </div>\
    <div id='talents'>\
    \
    <p class='transient'>2. Poursuivez avec les <b>Talents</b> (Concernant la <span class='tooltip'>Sorcellerie<span class='tooltiptext'>Majaïn n'a jamais appris l'art de la sorcellerie, il ne peut donc pas mettre de point dans ce talent, mais pourra tout de même mettre des points de <b>Savoirs</b> dans la catégorie «Sorcellerie et monde mystique» pour représenter une connaissance théorique de ce sujet, plutôt qu'appliquée.</span></span>)</p><br>\
    \
    <p class='transient'><a href='./agility_boost'>&#8607 <b>Agilité</b></a> / <a href='./agility_decrease'>&#8609 <b>Agilité</b></a></p><br>\
    \
    <p class='transient'><a href='./athleticism_boost'>&#8607 <b>Athlétisme</b></a> / <a href='./athleticism_decrease'>&#8609 <b>Athlétisme</b></a></p><br>\
    \
    <p class='transient'><a href='./leadership_boost'>&#8607 <b>Leadership</b></a> / <a href='./leadership_decrease'>&#8609 <b>Leadership</b></a></p><br>\
    \
    <p class='transient'><a href='./cunning_boost'>&#8607 <b>Ruse</b></a> / <a href='./cunning_decrease'>&#8609 <b>Ruse</b></a></p><br>\
    \
    </div>\
    <div id='savoirs'>\
    \
    <p class='transient'>3. Terminez avec les <b>Savoirs</b></p><br>\
    \
    <p class='transient'><a href='./cult_race_boost'>&#8607 <b>Cultures et races</b></a> / <a href='./cult_race_decrease'>&#8609 <b>Cultures et races</b></a></p><br>\
    \
    <p class='transient'><a href='./monst_boost'>&#8607 <b>Monstruosités</b></a> / <a href='./monst_decrease'>&#8609 <b>Monstruosités</b></a></p><br>\
    \
    <p class='transient'><a href='./nobil_boost'>&#8607 <b>Nobilité et l'intendance</b></a> / <a href='./nobil_decrease'>&#8609 <b>Nobilité et l'intendance</b></a></p><br>\
    \
    <p class='transient'><a href='./sorc_mist_boost'>&#8607 <b>Sorcellerie et au monde mystique</b></a> / <a href='./sorc_mist_decrease'>&#8609 <b>Sorcellerie et au monde mystique</b></a></p><br>\
    \
    <p class='transient'><a href='./wild_surv_boost'>&#8607 <b>Survie et au monde sauvage</b></a> / <a href='./wild_surv_decrease'>&#8609 <b>Survie et au monde sauvage</b></a></p><br>\
    \
    </div>\
    </div>\
    \
    <p class='transient'><i><a href='./begin_tale'>Débuter le récit.</b></a></p><br>\
    \
    ",
    {
      tags: ["topic"],
      displayOrder: 4,
      actions: {
        "martial_boost": function (character, system, action) {
          if (nb_attr_increase >= 5) { } else {
            if (character.qualities.mar < 3) {
              system.setQuality("mar", character.qualities.mar + 1);
              nb_attr_increase += 1;
            }
          }
        },
        "martial_decrease": function (character, system, action) {
          if (character.qualities.mar > 1) {
            system.setQuality("mar", character.qualities.mar - 1);
            nb_attr_increase -= 1;
          }
        },
        "instinct_boost": function (character, system, action) {
          if (nb_attr_increase >= 5) { } else {
            if (character.qualities.inst < 3) {
              system.setQuality("inst", character.qualities.inst + 1);
              nb_attr_increase += 1;
            }
          }
        },
        "instinct_decrease": function (character, system, action) {
          if (character.qualities.inst > 1) {
            system.setQuality("inst", character.qualities.inst - 1);
            nb_attr_increase -= 1;
          }
        },
        "intel_boost": function (character, system, action) {
          if (nb_attr_increase >= 5) { } else {
            if (character.qualities.intel < 3) {
              system.setQuality("intel", character.qualities.intel + 1);
              nb_attr_increase += 1;
            }
          }
        },
        "intel_decrease": function (character, system, action) {
          if (character.qualities.intel > 1) {
            system.setQuality("intel", character.qualities.intel - 1);
            nb_attr_increase -= 1;
          }
        },
        "soc_boost": function (character, system, action) {
          if (nb_attr_increase >= 5) { } else {
            if (character.qualities.soc < 3) {
              system.setQuality("soc", character.qualities.soc + 1);
              nb_attr_increase += 1;
            }
          }
        },
        "soc_decrease": function (character, system, action) {
          if (character.qualities.soc > 1) {
            system.setQuality("soc", character.qualities.soc - 1);
            nb_attr_increase -= 1;
          }
        },
        "prow_boost": function (character, system, action) {
          if (nb_attr_increase >= 5) { } else {
            if (character.qualities.prow < 3) {
              system.setQuality("prow", character.qualities.prow + 1);
              nb_attr_increase += 1;
            }
          }
        },
        "prow_decrease": function (character, system, action) {
          if (character.qualities.prow > 1) {
            system.setQuality("prow", character.qualities.prow - 1);
            nb_attr_increase -= 1;
          }
        },
        "vig_boost": function (character, system, action) {
          if (nb_attr_increase >= 5) { } else {
            if (character.qualities.vig < 3) {
              system.setQuality("vig", character.qualities.vig + 1);
              nb_attr_increase += 1;
            }
          }
        },
        "vig_decrease": function (character, system, action) {
          if (character.qualities.vig > 1) {
            system.setQuality("vig", character.qualities.vig - 1);
            nb_attr_increase -= 1;
          }
        },
        "agility_boost": function (character, system, action) {
          if (nb_talent_increase >= 4) { } else {
            if (character.qualities.agility < 3) {
              system.setQuality("agility", character.qualities.agility + 1);
              nb_talent_increase += 1;
            }
          }
        },
        "agility_decrease": function (character, system, action) {
          if (character.qualities.agility > 1) {
            system.setQuality("agility", character.qualities.agility - 1);
            nb_talent_increase -= 1;
          }
        },
        "athleticism_boost": function (character, system, action) {
          if (nb_talent_increase >= 4) { } else {
            if (character.qualities.athleticism < 3) {
              system.setQuality("athleticism", character.qualities.athleticism + 1);
              nb_talent_increase += 1;
            }
          }
        },
        "athleticism_decrease": function (character, system, action) {
          if (character.qualities.athleticism > 1) {
            system.setQuality("athleticism", character.qualities.athleticism - 1);
            nb_talent_increase -= 1;
          }
        },
        "leadership_boost": function (character, system, action) {
          if (nb_talent_increase >= 4) { } else {
            if (character.qualities.leadership < 3) {
              system.setQuality("leadership", character.qualities.leadership + 1);
              nb_talent_increase += 1;
            }
          }
        },
        "leadership_decrease": function (character, system, action) {
          if (character.qualities.leadership > 1) {
            system.setQuality("leadership", character.qualities.leadership - 1);
            nb_talent_increase -= 1;
          }
        },
        "cunning_boost": function (character, system, action) {
          if (nb_talent_increase >= 4) { } else {
            if (character.qualities.cunning < 3) {
              system.setQuality("cunning", character.qualities.cunning + 1);
              nb_talent_increase += 1;
            }
          }
        },
        "cunning_decrease": function (character, system, action) {
          if (character.qualities.cunning > 1) {
            system.setQuality("cunning", character.qualities.cunning - 1);
            nb_talent_increase -= 1;
          }
        },
        "cult_race_boost": function (character, system, action) {
          if (nb_knowledge_increase >= 3) { } else {
            if (character.qualities.cult_race < 3) {
              system.setQuality("cult_race", character.qualities.cult_race + 1);
              nb_knowledge_increase += 1;
            }
          }
        },
        "cult_race_decrease": function (character, system, action) {
          if (character.qualities.cult_race > 1) {
            system.setQuality("cult_race", character.qualities.cult_race - 1);
            nb_knowledge_increase -= 1;
          }
        },
        "monst_boost": function (character, system, action) {
          if (nb_knowledge_increase >= 3) { } else {
            if (character.qualities.monst < 3) {
              system.setQuality("monst", character.qualities.monst + 1);
              nb_knowledge_increase += 1;
            }
          }
        },
        "monst_decrease": function (character, system, action) {
          if (character.qualities.monst > 1) {
            system.setQuality("monst", character.qualities.monst - 1);
            nb_knowledge_increase -= 1;
          }
        },
        "nobil_boost": function (character, system, action) {
          if (nb_knowledge_increase >= 3) { } else {
            if (character.qualities.nobil < 3) {
              system.setQuality("nobil", character.qualities.nobil + 1);
              nb_knowledge_increase += 1;
            }
          }
        },
        "nobil_decrease": function (character, system, action) {
          if (character.qualities.nobil > 1) {
            system.setQuality("nobil", character.qualities.nobil - 1);
            nb_knowledge_increase -= 1;
          }
        },
        "sorc_mist_boost": function (character, system, action) {
          if (nb_knowledge_increase >= 3) { } else {
            if (character.qualities.sorc_mist < 3) {
              system.setQuality("sorc_mist", character.qualities.sorc_mist + 1);
              nb_knowledge_increase += 1;
            }
          }
        },
        "sorc_mist_decrease": function (character, system, action) {
          if (character.qualities.sorc_mist > 1) {
            system.setQuality("sorc_mist", character.qualities.sorc_mist - 1);
            nb_knowledge_increase -= 1;
          }
        },
        "wild_surv_boost": function (character, system, action) {
          if (nb_knowledge_increase >= 3) { } else {
            if (character.qualities.wild_surv < 3) {
              system.setQuality("wild_surv", character.qualities.wild_surv + 1);
              nb_knowledge_increase += 1;
            }
          }
        },
        "wild_surv_decrease": function (character, system, action) {
          if (character.qualities.wild_surv > 1) {
            system.setQuality("wild_surv", character.qualities.wild_surv - 1);
            nb_knowledge_increase -= 1;
          }
        },
        "begin_tale": function (character, system, action) {
          if (nb_attr_increase < 5 && nb_talent_increase < 4 && nb_knowledge_increase < 3) {
            alert("Il vous reste des points à ajouter")
          } else {
            system.write("<p class='transient'><a href='s_2'>Cliquez pour continuer</a></p>")
          }
        },
      },
      enter: function (character, system, from) {
        document.getElementById("g_equipment").style.display = "none";
      },
      exit: function (character, system, to) {
      }
    }
  ),
  s_9999: new undum.Situation(
    {
      enter: function (character, system, from) {
        document.getElementById("g_equipment").style.display = "none";

        system.write("<p></p><p>Le récit que vous vous apprêtez à entamer raconte comment un jeune Yédinite, nommé Majaïn, s'est taillé une place au sein de la Compagnie des Intouchables lors de la prise du fort Kepir. Sont histoire vous sera révélé au passage des lignes qui suivent. Sachez que vos choix définiront le chemin que prendra le Yédinite, et qu’au final, vous forgerez l’homme qui deviendra. </p><br>")

        system.write("<p></p><p>Avant de débuter, définissez les <b>Attributs</b>, <b>Talents</b> et <b>Savoirs</b> que Majaïn aurait développé de sa jeunesse jusqu’au moment de la bataille de Kepir. Encore une fois, vos choix auront des conséquences sur le déroulement et le récit qui se présentera à vous. Une description des Attributs, des Talents et des Savoirs est disponible dans la section « Règles ».</p><br>")

        system.write("<p></p><p>Placez 5 points répartis entre <a href='javascript:skill_boost()'>this action</a> les différents attributs primaires et secondaires du personnage, en ne dépassant jamais plus de 3 points totaux dans la même catégorie.</p><br>")

        system.write("<p class='transient'><a href='s_2'>Cliquez pour continuer</a></p>")
      },
      exit: function (character, system, from) { }
    }
  ),
  s_2: new undum.Situation(
    {
      enter: function (character, system, from) {
        system.write("<img src='media/img/Kepir.png' width='100%' height='100%' class='float_right'>")
        system.write("<p></p><p>Le sol était jonché d’amas de pierres. On aurait dit les corps de guerriers tombés il y a longtemps dans le chaos d’un champ de bataille nordique. Un rapide coup d’œil à la tour révéla une large plaie béante le long de la façade ouest, quelque part entre le second et troisième étage. L’intégrité de cette structure, qu’on n’avait plus utilisé depuis la fin de la <span class='tooltip'>guerre des Étendards<span class='tooltiptext'>L’Empire d’Abanaus s’étendait autrefois au-delà de ses frontières continentales actuelles sur tout le territoire des États maritimes de Terefia, Presia, Navie, Vilae et Gearaid. Les politiques centralisatrices des Empereurs finirent par amener les États maritime à s’unir et déclarer leur indépendance face au pouvoir impérial. La guerre des Étendards eu lieu entre 712 et 720 et culmina avec la victoire des États maritimes.</span></span>, était pour le moins incertaine.</p><br>")

        system.write("<p></p><p>Malgré le mauvais temps qui obscurcirait sa vision, il devinait que ses poursuivants étaient encore à quelques <span class='tooltip'>miles<span class='tooltiptext'>L’unité de distance la plus couramment utilisée sur le continent d’Aeterna est le \"Mile impériale\", qui correspond à 1250 pas. Pour les distances plus grandes, on utilise le \"Lieu impérial\" qui correspond à 4 miles impériaux. Enfin, les distances courtes sont comptées à l’aide du \"Mètre impérial\" qui correspond à 3 pas.</span></span> d’où il se trouvait.</p><br>")

        system.write("<p></p><p>Majaïn resta immobile l’instant d’un moment, pensif. Il savait que ses chances étaient bonnes d’abattre au moins un des cavaliers s’il prenait rapidement place dans les hauteurs de la tour. Rien, néanmoins, ne pouvait garantir un tir franc sous une tempête naissante; pas même Meïra, l’oracle de la chasse et de l’abondance. De plus, les " + character.qualities.arrow + " flèches que contenait son carquois ne lui permettraient certainement pas de mener un siège de longue durée si ses adversaires décidaient de garder leur distance le temps d'attendre du renfort. Puis, un doute lui vint à l’esprit. Peut-être que les intentions hostiles qu’il leur prêtait n’étaient que le fruit de sa méfiance envers les hommes. Peut-être les villageois de Valfis avaient-ils appris la vérité sur ce qui s’était passé plus tôt ce jour-là et qu’ils ne le tenaient pas responsable de la mort du magistrat.</p><br>")

        system.write("<p></p><p>Son regard se porta sur une flaque d’eau stagnante que le froid n’avait pas encore paralysé et il avança en sa direction. Il se pencha pour y voir son reflet. Il aperçut la silhouette de son visage allongé et la forme de ses oreilles élancées et pointues qui se hissaient entre ses longs cheveux noirs. Ses yeux étaient des perles opalescentes qui scintillaient légèrement dans l’obscurité.</p><br>")

        system.write("<p></p><p>À cet instant, il se rappela pourquoi il pouvait difficilement faire confiance aux hommes.</p><br>")

        system.write("<p class='transient'><a href='choice_after_s_2'>Cliquez pour continuer</a></p>")
      },
      exit: function (character, system, from) { }
    }
  ),
  choice_after_s_2: new undum.SimpleSituation(
    "<p class='transient'><i>Majaïn pourrait attendre les cavaliers au pied de la tour et leur laisser la chance de s’expliquer avant de juger de leurs intentions; il pourrait aussi chercher à prendre l'initiative et engager les cavaliers dès qu’ils sont bien en vue.</i></p>",
    {
      choices: "#fork_1"
    }
  ),
  s_3: new undum.Situation(
    {
      optionText: "Laisser les cavaliers venir à lui et juger de la meilleure approche à suivre ensuite;",
      tags: "fork_1",
      enter: function (character, system, from) {
        system.write("<img src='media/img/section.png' width='5%' height='5%' class='float_center'><br>")

        system.write("<p></p><p>Majaïn sentit un courant d’air chaud lui effleurer la nuque, bousculant au passage la trajectoire des flocons qui tombaient silencieusement au sol. Énilva, sa fidèle jument, le caressait délicatement comme pour le tirer de sa réflexion. Le rôdeur plaça sa main contre son museau et flatta sa crinière sombre dans un mouvement rassurant. Il entendait les hennissements des chevaux qui ne devaient plus être très loin. Il s’était résolu à s’entretenir avec quiconque l’avait pourchassé jusqu’ici-là et tenter de les raisonner. D’un simple geste, il commanda Enilva qui alla s‘immobiliser quelques mètres derrière lui près de la tour. Il déposa au sol son arc et son carquois et décrocha le petit bouclier qui pendait contre de sa hanche gauche et le fixa sur sa main opposée. Enfin, il empoigna son sabre et le tira hors de son fourreau de cuir souple. La pointe de la longue lame alla rejoindre le sol et s’immobilisa.</p><br>")

        system.write("<p></p><p>Le grondement des pas s’arrêta net. Quatre silhouettes s’immobilisèrent sur leurs montures, à une vingtaine de mètres d’où se tenait Majaïn.</p><br>")

        system.write("<p></p><p>À chaque extrémité, deux hommes au visage crispé, dont les coiffes de fourrure et les habits étaient couverts de glaçons, portaient chacun une torche. À en juger par leur expression, la rigueur du voyage les avaient grandement incommoder. Les vêtements de laine qu’ils portaient étaient simples et mal adaptés aux conditions actuelles. Le rôdeur devina qu’il s’agissait sans nul doute de deux gardes de la milice locale de Valfis.</p><br>")

        system.write("<p></p><p>Les deux hommes au centre étaient bien différents. Le premier portait un heaume surmonté de plumes exotiques qui s’agitaient de gauche à droite. Sous sa cape, un vêtement matelassé couvrait son corps des épaules aux cuisses. La fabrique de son gambison, aux teintes d’ivoire, d’émeraude et d’améthyste, était caractéristiques des peuples sauvages du Quedjuska, par-delà la mer à l’ouest. Majaïn avait maintes fois entendu les bardes faire l’éloge de la bravoure et la férocité des hommes des tribus nomades de cette région lointaine.</p><br>")

        system.write("<img src='media/img/hiboux.png' width='40%' height='40%' class='float_right'><br>")

        system.write("<p></p><p>Le dernier des quatre hommes portait une large étoffe de fourrure qui couvrait ses épaules et qui glissait en cascade jusque sur les hanches de son cheval. Bien qu’il eût le visage découvert et rien, pas même un seul cheveu sur la tête, pour le couper du froid, il ne laissait rien paraître de l’inconfort qu’il pouvait ressentir. La brigandine de cuir bouilli et d’acier qu’il portait était raffinée, tout comme le caparaçon de soie qui dépassait sous la selle de sa monture. On y avait brodé l’image d’un hibou d'or sur fond noir. L’homme chauve fixait Majaïn, comme s’il ne voulait manquer aucun détail de sa personne.</p><br>")

        system.write("<p class='transient'><a href='s_4'>Cliquez pour continuer</a></p>")
      },
      exit: function (character, system, from) { }
    }
  ),
  s_4: new undum.Situation(
    {
      enter: function (character, system, from) {
        system.write("<img src='media/img/section.png' width='5%' height='5%' class='float_center'><br>")

        system.write("<p></p><p>Le rôdeur devait faire un peu moins de deux mètres de la tête aux pieds. Ses épaules, larges et bien ancrées à son torse, laissaient deviner une forte constitution. La lumière des torches illuminait son visage basané et s’intensifiait au contact de ses yeux d’ivoire. Son regard était comme un brouillard impénétrable, silencieux et impassible. Aucun homme n’aurait pu avoir un tel regard, à moins d’être frappé d’une quelconque sorcellerie. Mais ce n’était pas le cas de celui qui se tenait, solitaire, devant le cavalier chauve et ses alliés. Non; ses oreilles, ses yeux, sa taille… tous ces éléments suggéraient plutôt qu’il n’appartenait pas à la race des Hommes, mais bien à celle des <span class='tooltip'>Sédivi<span class='tooltiptext'>Les érudits avancent que trois groupes peuplaient le monde avant les Hommes : Les Sédivi, les Skilliens et les Moraniens. Progressivement, ces trois cultures se sont effacées face à l’expansion des Hommes. Des trois peuples fondateurs, seuls les Sédivi se sont adaptés au monde humain; on dit même que les premières cités humaines furent offertes en cadeau par les Sédivi. Étant physiquement très similaire, à quelques exceptions près, plusieurs croient que les Hommes descendent des Sédivi.</span></span>, dont ces derniers descendent.</p><br>")

        system.write("<p></p><p>D’un mouvement de la main, l’homme en armure de cuir bouilli fit signe aux autres qui descendirent de leurs chevaux et s’avancèrent. Une fois à terre, chacun des miliciens aux extrémités agrippa un gros gourdin qui leur pendait à ceinture. Le guerrier Quedjuskanais s’imobilisa un peu en retrait et s’appuya sur sa lance.</p><br>")

        system.write("<p></p><p>— Je suis Piodan, de la Compagnie du hibou doré, entama l’homme chauve. Je m’étais rendu à Valfis ce matin pour y passer une nuit agréable à m’enivrer d’alcool et de bonne chair, mais malheureusement, dès mon arrivée, on a engagé mes services! On m’a demandé de retrouver l’assassin du magistrat Degain.</p><br>")

        system.write("<p></p><p>» Selon le récit des villageois, un Sédiv aurait été engagé, il y a quelques jours, pour débarrasser le village d’une meute de loup sanguinaires. Des témoins racontent avoir aperçu le Sédiv sortir de la demeure du magistrat ce matin, puis prendre la direction de l’Est. Degain a été retrouvé mort dans sa demeure peu après.</p><br>")

        system.write("<p></p><p>text</p><br>")

        system.write("<p class='transient'><a href='choice_after_s_2'>Cliquez pour continuer</a></p>")
      },
      exit: function (character, system, from) { }
    }
  ),
  s_XXX: new undum.Situation(
    {
      optionText: "Chercher rapidement un endroit d'où il pourra engager efficacement les cavaliers avec son arc;",
      tags: "fork_1",
      enter: function (character, system, from) {
        system.write("<img src='media/img/section.png' width='5%' height='5%' class='float_center'><br>")

        system.write("<p></p><p>Il distinguait trois, possiblement quatre tâches de flamme qui s’agitaient à sa poursuite dans la monotonie sombre de la nuit. L’écho portait le son étouffé de voix qui beuglaient et le halètement des quadrupèdes qu’on poussait à l’épuisement.</p><br>")

        system.write("<p class='transient'><a href='s_2'>Cliquez pour continuer</a></p>")
      },
      exit: function (character, system, from) { }
    }
  ),
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "s_1";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
  //Character main attributes
  intel: new undum.IntegerQuality(
    "Intellectuel", { priority: "0002", group: 'main_attr' }
  ),
  inst: new undum.NumericQuality(
    "instinct", { priority: "0001", group: 'main_attr' }
  ),
  soc: new undum.IntegerQuality(
    "Social", { priority: "0004", group: 'main_attr' }
  ),
  mar: new undum.IntegerQuality(
    "Martial", { priority: "0003", group: 'main_attr' }
  ),

  //Character secondary attributes
  vig: new undum.NumericQuality(
    "Vigueur", { priority: "0002", group: 'sec_attr' }
  ),
  prow: new undum.NumericQuality(
    "Prouesse", { priority: "0001", group: 'sec_attr' }
  ),

  //Stats for talents
  athleticism: new undum.NumericQuality(
    "Athlétisme", { priority: "0002", group: 'talent' }
  ),
  agility: new undum.NumericQuality(
    "Agilité", { priority: "0001", group: 'talent' }
  ),
  cunning: new undum.NumericQuality(
    "Ruse", { priority: "0004", group: 'talent' }
  ),
  leadership: new undum.NumericQuality(
    "Leadership", { priority: "0003", group: 'talent' }
  ),
  sorcery: new undum.NumericQuality(
    "Sorcellerie", { priority: "0005", group: 'talent' }
  ),

  //Stats for the knowledges
  cult_race: new undum.NumericQuality(
    "Cultures et races", { priority: "0002", group: 'knowledge' }
  ),
  monst: new undum.NumericQuality(
    "Monstruosités", { priority: "0003", group: 'knowledge' }
  ),
  nobil: new undum.NumericQuality(
    "Nobilité/Intendance", { priority: "0004", group: 'knowledge' }
  ),
  sorc_mist: new undum.NumericQuality(
    "Sorcerie et monde mystique", { priority: "0005", group: 'knowledge' }
  ),
  wild_surv: new undum.NumericQuality(
    "Survie et monde sauvage", { priority: "0006", group: 'knowledge' }
  ),

  //Stats for morality scale
  moral_people: new undum.NumericQuality(
    "Les gens", { priority: "0001", group: 'morality' }
  ),
  moral_law: new undum.NumericQuality(
    "La loi et l'ordre", { priority: "0002", group: 'morality' }
  ),

  // Stats for combat
  armor: new undum.NumericQuality(
    "Protection", { priority: "0001", group: 'combat_stat' }
  ),

  //Equipment list
  saber: new undum.OnOffQuality(
    "Sabre", { priority: "0001", group: 'equipment', onDisplay: "&#10003;" }
  ),
  saber_equip: new undum.OnOffQuality(
    "Sabre (équipé)", { priority: "0001", group: 'equipment', onDisplay: "&#10003;" }
  ),
  shortbow: new undum.OnOffQuality(
    "Arc court", { priority: "0002", group: 'equipment', onDisplay: "&#10003;" }
  ),
  shortbow_equip: new undum.OnOffQuality(
    "Arc court (équipé)", { priority: "0002", group: 'equipment', onDisplay: "&#10003;" }
  ),
  buckler: new undum.OnOffQuality(
    "Bocle", { priority: "0003", group: 'equipment', onDisplay: "&#10003;" }
  ),
  buckler_equip: new undum.OnOffQuality(
    "Bocle (équipé)", { priority: "0003", group: 'equipment', onDisplay: "&#10003;" }
  ),
  scale_armor: new undum.OnOffQuality(
    "Armure d'écailles", { priority: "0004", group: 'equipment', onDisplay: "&#10003;" }
  ),
  scale_armor_equip: new undum.OnOffQuality(
    "Armure d'écailles (équipée)", { priority: "0004", group: 'equipment', onDisplay: "&#10003;" }
  ),
  arrow: new undum.IntegerQuality(
    "Flèches", { priority: "0005", group: 'equipment', onDisplay: "&#10003;" }
  ),
  rope: new undum.IntegerQuality(
    "Corde (10 m.)", { priority: "0005", group: 'equipment', onDisplay: "&#10003;" }
  ),
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
  main_attr: new undum.QualityGroup('Attributs primaires', { priority: "0001" }),
  sec_attr: new undum.QualityGroup('Attributs secondaires', { priority: "0002" }),
  talent: new undum.QualityGroup('Talents', { priority: "0003" }),
  knowledge: new undum.QualityGroup('Connaissances', { priority: "0004" }),
  combat_stat: new undum.QualityGroup('Modificateurs de combat', { priority: "0005" }),
  morality: new undum.QualityGroup('Compas moral', { priority: "0006" }),
  equipment: new undum.QualityGroup('Équipement', { priority: "0001" }),
  //equipment: new undum.NonZeroIntegerQuality('Équipement', { priority: "0007" })
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
  //Define character main attributes
  character.qualities.intel = Majaïn.attributes.intel.current;
  //character.qualities_max.sorc = Majaïn.attributes.sorc.max;

  character.qualities.mar = Majaïn.attributes.mar.current;
  //character.qualities_max.mar = Majaïn.attributes.mar.max;

  character.qualities.soc = Majaïn.attributes.soc.current;
  //character.qualities_max.eloc = Majaïn.attributes.eloc.max;

  character.qualities.inst = Majaïn.attributes.inst.current;

  //Define character secondary attributes
  character.qualities.vig = Majaïn.attributes.vig.current;
  //character.qualities_max.vig = Majaïn.attributes.vig.max;

  character.qualities.prow = Majaïn.attributes.cou.current;
  //character.qualities_max.prow = Majaïn.attributes.cou.current;

  //Define character armor
  character.qualities.armor = 2;

  //Define character talents
  character.qualities.athleticism = Majaïn.talent.athleticism
  character.qualities.agility = Majaïn.talent.agility
  character.qualities.cunning = Majaïn.talent.cunning
  character.qualities.leadership = Majaïn.talent.leadership
  character.qualities.sorcery = Majaïn.talent.sorcery

  //Define character knowledge
  character.qualities.cult_race = Majaïn.knowledge.cult_race
  character.qualities.monst = Majaïn.knowledge.monst
  character.qualities.nobil = Majaïn.knowledge.nobil
  character.qualities.sorc_mist = Majaïn.knowledge.sorc_mist
  character.qualities.wild_surv = Majaïn.knowledge.wild_surv


  //Character moral aligment
  character.qualities.moral_people = "indifferent"
  character.qualities.moral_law = "rebelious"

  //Character list of starting equipment
  character.qualities.saber = 1;
  character.qualities.saber_equip = 0;
  character.qualities.shortbow = 1;
  character.qualities.shortbow_equip = 0;
  character.qualities.buckler = 1;
  character.qualities.buckler_equip = 0;
  character.qualities.scale_armor_equip = 1;
  character.qualities.arrow = Majaïn.equipment.misc.arrow;
  character.qualities.rope = Majaïn.equipment.misc.rope;
  system.setCharacterText("<p>Recap.</p>");
};
