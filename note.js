/* The situations that the game can be in. Each has a unique ID. */
/* undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Le poid des actions</h1>\
        <img src='media/tour_gorver.png' width='50%' height='50%' class='float_right'>\
        <p>Les flocons de l’hiver hâtif caressaient violemment le visage de Majaïn tandis que\
        sa monture piétinait âprement le mince couvert blanc des plaines de Gorver. Derrière lui, peinant tout juste\
        à le suivre, les lambeaux de sa vieille cape brune s’agitaient au vent dans un mouvement quasi identique à celui de\
        ses longs cheveux noir-ébène qui ondulaient vigoureusement. Le son des sabots et le cliquetis des écailles forgées de\
        son armure qui s’entrechoquaient les unes contre les autres brisaient le lourd silence\
        qui régnait alors dans les plaines. Ça, les murmures de la tempête qui se levait et le bruit\
        croissant d’autres chevaux qui galopaient à sa rencontre.  </p>\
        \
        <p>Par-dessus son épaule, Majaïn pouvait apercevoir trois, possiblement quatre silhouettes lointaines\
        bien résolues à le pourchasser. Il pouvait presque entendre le son étouffé des voix des cavaliers qui le\
        traquaient, jurant et pressant leurs chevaux de réduire la distance qui les séparait de celui qui menait pour\
        l’instant cette course effrénée.</p>\
        \
        <p>- <i>Encore un effort Enilva, on y est presque</i>, chuchota Majaïn; tout en approchant son visage et passant\
        sa main au travers de la crinière sombre de sa jument haletante. </p><br>\
        \
        <p class='transient'>Click <a href='hub'>this link to\
        continue...</a></p>"
    ),

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "What Undum Games are Made Of",
        displayOrder: 1
    }),
    todo: new undum.SimpleSituation(
        "<p>Two things can happen in a situation. The character either\
        <a href='links'>leaves</a> the situation and enters another one, or\
        they carry out some <a href='./do-something'>action</a>. Actions may\
        perform some processing, they may display some results, but\
        ultimately they put the character back into the same situation\
        again.</p>\
        \
        <p>When you are designing your game, use situations to reflect a\
        change in what the character can do. So you would change situation if\
        the character pulls a lever to open a trapdoor, for example. Actions\
        are intended for situations where the character can examine things\
        more closely, or maybe top up their magic by drinking a potion.\
        Things that don't affect the state of the world around them.</p>\
        \
        <p>Situations generate content when they are <em>enter</em>ed,\
        <em>exit</em>ed, and when they receive an <em>act</em>ion (the\
        italicised words are the names of the three methods that do this).\
        You can write code to generate content in any way you like, so the\
        content that is displayed can be totally dynamic: taking into\
        account the current state of the character.\
        Content is just plain HTML, so you use regular HTML tags to make\
        things <strong>bold</strong> or <em>italic</em>, or to include\
        images. This gives you a lot of flexibility. For example, since Undum\
        targets HTML5 browsers, you could use the <em>audio</em> or\
        <em>video</em> tags to include rich media.</p>\
        \
        <p class='transient'>Make sure you've carried out the action above,\
        then <a href='hub'>return to the topic list</a>.</p>",
        {
            actions: {
                'do-something': "<p>You carried out the action, well done.\
                                 You'll notice that the links for this\
                                 situation are still active. This means you\
                                 can click to perform the action again.</p>"
            }
        }
    ),
    links: new undum.SimpleSituation(
        "<p>Between each chunk of new text, Undum inserts a discreet line\
        in the margin. This allows you to see at a glance everything that\
        has been output as a result of your last click.\
        It is particularly useful for small devices, or when\
        lots of content has appeared. The window also scrolls so the start\
        of the new content is as near to the top of the window as possible.\
        This is also designed to help you read more naturally.</p>\
        \
        <p>If you've been watching carefully, you will have noticed that\
        parts of the text have been disappearing when you move between\
        situations. This isn't a bug! One of the aims of Undum is to give\
        game designers the ability to make the transcript of\
        the game read as a coherent piece of narrative. However, you often\
        need chunks of text that do nothing but offer the reader choices.\
        Undum defines a special CSS class to add to your HTML for this\
        (remember generated content is just HTML). It is <em>transient</em>,\
        and can be applied to paragraphs, <em>div</em>s, or just\
        <em>span</em>s<span class='transient'> (such as this one)</span>.</p>\
        \
        <p>You may also have noticed that, when you move situations, all the\
        links in the previous situation turn into regular text. This is to\
        stop you backtracking and trying previous options when you've already\
        committed to one. In other H-IF systems, this is\
        done by completely removing the content from previous pages.\
        That prevents you going back and reading your story, however.</p>\
        \
        <p class='transient'>The 'Different Kinds of Links' topic has more\
        about these links.\
        Let's return to the <a href='hub'>topic list</a>.</p>",
        {
            heading: "Disappearing Content",
            diplayOrder: 2,
            tags: ["topic"]
        }
    ),
    sticky: new undum.SimpleSituation(
        "<p>There are three types of link in Undum. The first two we've seen\
        in previous topics:\
        links to change situation and links to carry out an action. When you\
        include a link in your output, Undum parses it and wires it up\
        correctly. If you create a link with a HTML <em>href</em> attribute\
        containing just a name ('ballroom', for\
        example) this will send the character to the situation with that\
        name. Links\
        with two components ('ballroom/view-painting', for example) send\
        the character to a new situation <em>and then</em> carry out the\
        named action ('view-painting' in this case). To carry out an action\
        in the current situation, you can replace the situation name with a\
        dot (so it would be './view-painting'). In all cases, if the\
        character is already in that situation, then the situation's\
        <em>enter</em> method won't be called again.</p>\
        \
        <img src='media/woodcut2.png' class='float_left'>\
        <p>The third type of link, then, is a general hyperlink. If your\
        link doesn't consist of a single element or pair of elements, as\
        above, then Undum will guess that you have a normal hyperlink. As\
        <a href='http://news.bbc.co.uk' class='sticky'>in this link</a>.\
        If you have a link that <em>does</em> look like an Undum link, you\
        can still force Undum not to interpret it as an action or situation\
        move, by adding the CSS class <em>raw</em> to the HTML <em>a</em> tag.\
        links that don't have the <em>raw</em> class, but that are considered\
        to be non-Undum links (like the link above), will have <em>raw</em>\
        added to them before display. This could allow you to style external\
        links differently, as we have done here.</p>\
        \
        <p>In the last situation I said you can prevent links from being\
        turned into regular text when you move situations. This is done\
        by another CSS class: <em>sticky</em>. When you\
        <a href='oneshot'>leave this situation</a>, you'll notice the\
        external link stays active. This can allow you to have options that\
        stay valid throughout the narrative, for example, such as a spell to\
        teleport home.</p>",
        {
            tags: ["topic"],
            displayOrder: 3,
            heading: "Different Kinds of Links"
        }
    ),
    oneshot: new undum.SimpleSituation(
        "<p>There is one final option for links. If you give a link\
        the <em>once</em> CSS class, then that link will disappear\
        after it is clicked. This is  used (as in\
        <a href='./one-time-action' class='once'>this link</a>) for\
        actions that you only want to be possible once. There is no\
        point using 'once' on situation links because they'll be turned\
        into text as soon as you click them anyway (unless they are also\
        <em>sticky</em>, of course).</p><p>Once links are useful\
        for actions such as examining an object more carefully. You\
        don't want lots of repeated descriptions, so making the link\
        a <em>once</em> link is more user friendly.</p>\
        <p>If you have more than one link to the same action, then all\
        matching links will be removed, so you don't have to worry about\
        the player having an alternative way to carry out the action.</p>\
        <p class='transient'>After you've clicked the link, let's\
        <a href='hub'>move on</a>.</p>",
        {
            actions: {
                "one-time-action": "<p>As I said, one time actions are\
                                   mostly used to describe something in\
                                   more detail, where you don't want the\
                                   same descriptive text repeated over and\
                                   over</p>"
            }
        }
    ),
    qualities: new undum.SimpleSituation(
        "<p>Let's talk about the character.\
        The character is described by a series of <em>qualities</em>. These\
        are numeric values that can describe anything from natural abilities\
        to how much of a resource the character controls. Qualities are\
        shown in the box on the right of the text.</p>\
        \
        <p>The qualities there are those you started the game with. When you\
        <a href='quality-types'>go to the next situation</a>, keep your\
        eyes on the character panel. You'll notice I'll give you a boost to\
        your stamina quality. This process is animated and highlighted to\
        draw your attention to it. You could also get a boost of skill\
        by carrying out <a href='./skill-boost'>this action</a> as many\
        times as you like.</p>",
        {
            heading: "Qualities and the Character",
            tags: ["topic"],
            displayOrder: 4,
            actions: {
                "skill-boost": function(character, system, action) {
                    system.setQuality("skill", character.qualities.skill+1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("stamina", character.qualities.stamina+1);
            }
        }
    ),
    "quality-types": new undum.SimpleSituation(
        "<p>Not all the qualities in the character panel are displayed as\
        numeric. Internally they are all numeric, but different qualities\
        get to choose how to display themselves. So 'Luck', for example, is\
        displayed as words (based on the FUDGE RPG's adjective scale),\
        and 'Novice' is using just a check-mark.</p>\
        \
        <p>To see how Luck changes, try using this\
        <a href='./luck-boost'>luck-boosting action</a> or this\
        <a href='./luck-reduce'>luck-reducing action</a>. Notice that\
        luck uses a numeric bonus when it runs out of words. There are a range\
        of different display types provided with Undum, and you can easily\
        add your own too.</p>\
        \
        <p>When you <a href='character-text'>leave this situation</a>,\
        I'll set 'Novice' to zero. Watch\
        the character panel, and you'll see that Novice decides it doesn't\
        need to be displayed any more and will be removed. You will also see\
        that when the last\
        quality in a group is removed ('Novice' is in the 'Progress' group),\
        then the group heading is also removed. You can tell Undum what\
        group each quality belongs to, and what order they should be listed.\
        <p>",
        {
            actions: {
                "luck-boost": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck+1);
                },
                "luck-reduce": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck-1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("novice", 0);
            }
        }
    ),
    "character-text": new undum.SimpleSituation(
        "<h1>Character Text</h1>\
        <p>Above the list of qualities is a short piece of text, called\
        the character-text. This describes the character in some way. It\
        can be set by any action or when entering or leaving a situation.\
        It is just regular HTML content, as for all text in Undum. It can\
        also contain Undum links, so this is another place you can put\
        actions that the character can carry out over a long period of time.\
        </p>\
        <p class='transient'>Let's go back to the\
        <a href='hub'>topic list</a>. As you do, I'll change the\
        character text. Notice that it is highlighted, just the same as\
        when a quality is altered.</p>",
        {
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    progress: new undum.SimpleSituation(
        "<p>Sometimes you want to make the change in a quality into a more\
        significant event. You can do this by animating the change in\
        quality. If you <a href='./boost-stamina-action'>boost your\
        stamina</a>, you will see the stamina change in the normal\
        way in the character panel. But you will also see a progress\
        bar appear and animate below.</p>",
        {
            tags: ["topic"],
            heading: "Showing a Progress Bar",
            displayOrder: 5,
            actions: {
                // I'm going indirect here - the link carries out an
                // action, which then uses doLink to directly change
                // the situation.  This isn't the recommended way (I
                // could have just changed situation in the link), but
                // it illustrates the use of doLink.
                "boost-stamina-action": function(character, system, action) {
                    system.doLink("boost-stamina");
                }
            },
            exit: function(character, system, to) {
                system.animateQuality(
                    'stamina', character.qualities.stamina+1
                );
            }
        }
    ),
    "boost-stamina": new undum.SimpleSituation(
        "<p>\
        <img src='media/woodcut3.png' class='float_right'>\
        The progress bar is also useful in situations where the\
        character block is displaying just the whole number of a quality,\
        whereas some action changes a fraction. If the quality is displaying\
        the character's level, for example, you might want to show a progress\
        bar to indicate how near the character is to levelling up.</p>\
        \
        <p>After a few seconds, the progress bar disappears, to keep the\
        focus on the text. Undum isn't designed for games where a lot of\
        statistic management is needed. If you want a change to be part\
        of the permanent record of the game, then write it in text.</p>\
        \
        <p>Let's <a href='hub'>return to the topic list.</a></p>"
        ),
    // Again, we'll retrieve the text we want from the HTML file.
    "saving": new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_saving").html());
        },
        tags: ["topic"],
        displayOrder: 6,
        optionText: "Saving and Loading"
    }),

    "implicit-boost": new undum.SimpleSituation(
        "<p>Your luck has been boosted<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck+1)
                system.doLink('example-choices');
            },
            optionText: "Boost Your Luck",
            displayOrder: 1,
            canView: function(character, system, host) {
                return character.qualities.luck < 4;
            }
        }
    ),
    "implicit-drop": new undum.SimpleSituation(
        "<p>Your luck has been reduced<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck-1)
                system.doLink('example-choices');
            },
            optionText: "Reduce Your Luck",
            displayOrder: 2,
            canView: function(character, system, host) {
                return character.qualities.luck > -4;
            }
        }
    ),
    "high-luck-only": new undum.SimpleSituation(
        "<p>Your luck is higher than 'fair'. The link to this \
        situation would not\
        have appeared if it were lower.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "High Luck Option",
            displayOrder: 3,
            canView: function(character, system, host) {
                return character.qualities.luck > 0;
            }
        }
    ),
    "low-luck-only": new undum.SimpleSituation(
        "<p>Your luck is lower than 'fair'. The link to this situation \
        appears whether\
        it is low or high, but can only be chosen if it is low. It does this\
        by defining a <em>canChoose</em> method.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "Low Luck Option (requires low luck to be clickable)",
            displayOrder: 3,
            canChoose: function(character, system, host) {
                return character.qualities.luck < 0;
            }
        }
    ),

    "last": new undum.SimpleSituation(
        "<h1>Where to Go Now</h1>\
        <p>So that's it. We've covered all of Undum. This situation is the\
        end, because it has no further links. The 'The End' message is\
        just in the HTML output of this situation, it isn't anything special\
        to Undum</p>\
        \
        <p>I've added an\
        inspiration quality to your character list. Its time for you to\
        crack open the game file and write your own story.</p>\
        <h1>The End</h1>",
        {
            tags: ["topic"],
            optionText: "Finish the Tutorial",
            displayOrder: 8,
            enter: function(character, system, from) {
                system.setQuality("longsword", 1);
                system.setCharacterText(
                    "<p>You feel all inspired, why not have a go?</p>"
                );
            }
        }
    )
};

======================================================================================================

s_1: new undum.SimpleSituation(
  "<h1>Le poids des choix</h1>\
  <img src='media/tour_gorver.png' width='50%' height='50%' class='float_right'>\
  <p>Les flocons de l’hiver hâtif caressaient violemment le visage de Majaïn tandis que sa monture piétinait le mince\
  couvert blanc des plaines de Gorver. Derrière lui, peinant tout juste à le suivre, les lambeaux de sa vieille cape brune\
  s’agitaient au vent, dans un mouvement quasi identique à celui de ses longs cheveux noir-ébène qui ondulaient vigoureusement.\
  Le son des sabots et le cliquetis des écailles forgées de son armure qui s’entrechoquaient brisaient le silence qui régnait alors\
  dans les plaines. Ça, et le bruit lointain des hommes qui galopaient à sa rencontre.</p><br>\
  \
  <p></p><p>Par-dessus son épaule, le vieux rôdeur pouvait apercevoir trois, possiblement quatre silhouettes distantes bien\
  résolues à le pourchasser. L’écho portait le son étouffé des voix des cavaliers qui le traquaient, jurant et poussant leurs\
  quadrupèdes à l’épuisement afin de réduire la distance qui les séparait de celui qui menait,\
  pour l’instant, cette course effrénée. </p><br>\
  \
  <p></p><p>— Encore un effort Enilva. On y est presque, lança Majaïn, tenant fermement les rênes de sa jument haletante.</p><br>\
  \
  <p></p><p>Quelque part devant, perchée au milieu de quelques basses collines solitaires, une tour depuis bien longtemps abandonnée\
  continuait de scruter l’horizon malgré son état déplorable. S’il ne l’apercevait toujours pas, il était néanmoins certain de\
  la trouver tout droit devant. Il connaissait bien la région et avait un talent particulier, comme tous les rôdeurs\
  d’ailleurs, pour se rappeler les traits des lieux qu’il avait déjà parcourus, même vaguement. S’il pouvait atteindre cet\
  ancien poste d’observation à temps, il se trouverait en position avantageuse lors de l’affrontement à venir. Car, après ce\
  qui s’était passé plus tôt ce jour-là à Valfis, il ne se faisait aucun doute quant à l’intention des\
  hommes qui le poursuivaient.</p><br>\
  \
  <p class='transient'><a href='s_2'>Cliquez pour continuer</a></p>\
"),
s_2: new undum.SimpleSituation(
  "<p></p><p>Il fallut encore quelques minutes avant que le terrain, qui était jusque-là d’un plat abrutissant, ne commence à\
  laisser place à de larges buttes çà et là. Tandis que Majaïn s’enfonçait dans les collines, une ombre commença à prendre\
  forme au travers du brouillard de neige qui s’agitait au gré du vent.  À une cinquantaine de mètres devant lui, les traits abimés\
  de la vieille tour de pierre perçaient, telle une flèche élancée, le manteau hivernal que commençaient à revêtir\
  les plaines. Après quelques instants, il arriva au pied de la haute structure. Autour de celle-ci, des amas de pierres\
  jonchaient le sol à la manière des corps de guerriers tombés, il y a longtemps, dans le chaos d’un champ de\
  bataille nordique.</p><br>\
  \
  <p></p><p>Un rapide coup d’œil à la tour révéla une large plaie béante le long de la façade ouest, quelque part entre le second\
  et troisième étage; à première vue causée par l’action du temps et la rigueur du climat. Émanant de la structure circulaire,\
  trois plateformes, chacune surmontée par une toiture de chaume maintenue par de larges poutres de bois, offraient probablement\
  les meilleurs points d’observation à des lieux à la ronde.</p><br>\
  \
  <p></p><p>Enilva avait presque fait halte. Majaïn posa sa main droite sur la selle, se pencha légèrement et balança adroitement\
  sa jambe gauche au-dessus de la croupe du cheval de manière à la déposer au sol sans perdre équilibre. Il agrippa son arc et\
  son carquois, qui étaient attachés par de solides lacets de cuir contre la selle de son cheval, et porta son regard en direction\
  de ses poursuivants. Malgré le mauvais temps qui obscurcirait sa vision, il pouvait estimer qu’ils se trouvaient encore à\
  peut-être un ou deux kilomètres de là. Cela ne lui laissait tout au plus que quelques minutes avant qu’ils ne l’aient rejoint\
  au sommet de la colline.</p><br>\
  \
  <p class='transient'><a href='choices_f_1'>Cliquez pour continuer</a></p>\
"),
choices_f_1: new undum.SimpleSituation(
  "<p class='transient'><i>S'il devait choisir entre attendre les cavaliers et les confronter de front, ou plutôt tenter de les\
  débusquer à bonne distance tandis qu’il le pouvait encore, que préfèrerait Majaïn?.</i></p>",
  {
    choices:"#f_1"
  }
),
f_1_s_1: new undum.SimpleSituation(
  "<p></p><p>Majaïn resta immobile l’instant d’un moment, pensif. Il savait que ses chances étaient bonnes d’abattre au moins\
  un des cavaliers s’il prenait rapidement place dans l’une plateforme de la tour. D’ailleurs, si Meïra lui était\
  favorable ce jour-là, il pourrait peut-être même tous les pousser vers leur dernier repos avant qu’ils n’atteignent\
  le bas de la tour. Rien, néanmoins, ne pouvait garantir un tir franc sous une tempête naissante, pas même l'oracle\
  de la chasse et de l’abondance. S’il n’arrivait pas à tous les abattre, alors quoi? Qu’est-ce qui les empêcherait\
  d’encercler l’endroit et de le piéger le temps d’attendre des renforts? Les quelques flèches que contenait son carquois\
  ne lui permettraient certainement pas de mener un siège de longue durée.</p><br>\
  \
  <p></p><p>Et puis, peut-être que les intentions hostiles qu’il leur prêtait n’étaient que le fruit de la méfiance qu’il\
  portait naturellement envers les hommes. Dans ce cas, les engager immédiatement ne ferait que leur donner\
  une raison de vraiment vouloir sa tête.</p><br>\
  \
  <p></p><p>Majaïn interrompit sa réflexion lorsqu’Enilva hennit derrière lui, expirant non loin de sa nuque un courant\
  d’air chaud qui bouscula la trajectoire des flocons qui tombaient au sol. Le rôdeur plaça doucement sa main contre\
  son museau et caressa sa crinière sombre dans un mouvement rassurant.</p><br>\
  \
  <p></p><p>Il pouvait maintenant entendre le piétinement des chevaux qui n’étaient plus très loin.\
  Il s’était résolu à écouter ce que les hommes de Valfis avaient à dire et à n’utiliser la force que s’il\
  y était forcé. Il prit place sur la colline de manière à être dos à la tour et face à eux.\
  Enilva se trouvait un peu plus loin, hors de portée des assaillants, mais tout de même assez\
  prêt s’il fallait de nouveau prendre la fuite.</p><br>\
  \
  <p></p><p>Une fois en position, Majaïn décrocha le petit bouclier qui pendait contre sa hanche gauche et le fixa sur\
  sa main opposée. Enfin, il empoigna son sabre et le tira hors de son fourreau de cuir souple. La pointe de la\
  longue lame affilée alla rejoindre le sol et s’immobilisa.</p><br>\
  \
  <p class='transient'><a href='s_3'>Cliquez pour continuer</a></p>\
  \
  ",
  {
    optionText: "Dégainer " + Majaïn.equipment.melee_weapon.french.son_sa + " " + Majaïn.equipment.melee_weapon.name +
    " et attendre qu’ils approchent pour juger de leurs intentions réelles et, si nécessaire, les engager au moindre\
    signe de menace.",
    tags: "f_1",
    displayOrder: "1",
    enter: function(character, system, action) {
        system.setQuality("melee", Majaïn.equipment.melee_weapon.stat.melee)
        assign_equipment(Majaïn,buckler)
        system.setQuality("armor", character.qualities.armor + Majaïn.equipment.shield.stat.armor)
        system.setQuality("saber", character.qualities.saber-1)
        system.setQuality("saber_equip", character.qualities.saber_equip+1)
        system.setQuality("buckler", character.qualities.buckler-1)
        system.setQuality("buckler_equip", character.qualities.saber_equip+1)
      }
  }
),
s_3: new undum.SimpleSituation(
  "<p></p><p>Le grondement que causait l’avance de la troupe s’arrêta sec lorsque quatre formes s’immobilisèrent sur leurs montures,\
  à une vingtaine de mètres d’où se tenait, seul, Majaïn. À chaque extrémité, deux hommes au visage crispé dont les coiffes\
  de fourrure grises et les habits de laines étaient couverts de glaçons. À en juger par leur expression, le voyage les avait laissés endoloris et\
  maussades. Leurs vêtements étaient simples et ternes, en plus d’être mal adaptés aux conditions actuelles. Le rôdeur devina\
  qu’il s’agissait sans nul doute de deux gardes de la milice locale de Valfis. Les deux autres hommes qui les accompagnaient, eux,\
  étaient bien différents. </p><br>\
  \
  <p></p><p>Le premier avait un heaume surmonté de plumes exotiques qui ballotaient de gauche à droite et portait sous sa cape un\
  vêtement matelassé qui couvrait son corps des épaules aux cuisses. Il tenait les rênes de son cheval d’une main et dans l’autre avait\
  une lance courte qui pointait vers le ciel. Les couleurs vives et riches qui teintaient son gambison étaient caractéristiques\
  des peuples du Quedjuska, à l’ouest. Bien qu’il n’y eût jamais mis les pieds, Majaïn avait maintes fois entendu les poètes\
  faire l’éloge de la bravoure et la férocité des hommes des tribus nomades de cette région lointaine. </p><br>\
  \
  <p></p><p>Le dernier des quatre hommes était celui qui se distinguait le plus clairement des autres. Une large étoffe de fourrure\
  d’ivoire couvrait ses épaules et glissait en cascade jusque sur les hanches de son cheval. La brigandine de cuir bouilli et d’acier qu’il portait était\
  raffinée, tout comme la housse de soie brodée qui dépassait sous la selle de sa monture; suggérant qu’il jouissait d’un certain\
  statut. C’était néanmoins sa stature et son attitude qui le démarquaient des autres. Bien qu’il eût le visage découvert, et rien,\
  pas même un seul cheveu sur la tête, pour le couper du froid, il ne laissait rien paraître de l’inconfort qu’il pouvait ressentir.\
  Son regard était perçant et il semblait attentif à tout ce qui se déroulait autour de lui. Il dégageait une confiance et une aisance\
  communes aux soldats aguerris par le combat. </p><br>\
  \
  <p class='transient'><a href='s_4'>Cliquez pour continuer</a></p>\
"),
s_4: new undum.SimpleSituation(
  //<img src='media/emblem.png' width='40%' height='30%' class='float_center'>\
  "<p></p><p>Il fixa longuement Majaïn, comme s’il l’étudiait. Il remarqua que sa posture était détendue, mais solidement ancrée,\
  que le sabre et l'écu qu’il tenait n’étaient pas communs dans cette partie du monde. Il devina qu'il devait donc se déplacer et se battre d’une manière\
  curieuse pour les soldats d’ici. Sa taille était élancée, mais parfaitement proportionnée,\
  et de larges épaules bien ancrées à son torse laissaient deviner une forte constitution. </p><br>\
  \
  <p></p><p>Le cavalier tapa doucement du talon le flanc sa monture de manière à la faire avancer de quelques pas. Simultanément, les trois autres hommes\
  descendirent de leurs chevaux et virent prendre place à ses côtés. Les deux gardes agrippèrent au passage de gros gourdins qu’ils avaient\
  à la ceinture et les faisaient balancer dans les airs; dans l’espoir probable de se donner un air plus menaçant qu’ils ne l’étaient vraiment.</p><br>\
  \
  <p></p><p>— Je suis Piodan, de la Compagnie du cygne noir. Toi, entama l’homme chauve sur un ton à la fois sophistiqué et ferme,\
  que j'ai dû poursuivre sans relâche depuis Valfis sous l’agitation d’un ciel colérique. Toi, qui me garderas des plaisirs de la chair et de l’hydre qui m’attendaient\
  pourtant ce soir. Auras-tu assez d’honneur pour me dire si c’est bien toi qu’on recherche pour l’assassinat de sieur Degain, régent de Valfis? </p><br>\
  \
  <p></p><p>— Pas b’soin qu’il dise un mot, j’le reconnaitrais parmi cent autres c’démon! s’exclama l’un des deux gardes. J’vous dis qu’c’est lui! </p><br>\
  \
  <p></p><p>Faisant fi des propos du milicien, Piodan continuait d’observer Majaïn, attendant une réponse. Bien que son regard inquisiteur n’eût\
  aucune difficulté à briser la volonté de paysans ou d’hommes de peu de courage, il ne commandait pas, chez le rôdeur, pareille autorité. Ce dernier\
  s’adonna tout de même au jeu de son adversaire, bien au fait que s’il voulait résoudre pacifiquement cette situation, c’est avec lui qu’il\
  devrait négocier. </p><br>\
  \
  <p class='transient'><a href='s_5'>Cliquez pour continuer</a></p>\
"),
s_5: new undum.SimpleSituation(
  "<p></p><p>— Je suis Majaïn, d’Hilgenfera. Si tu te demandes si je suis celui qui ait planté sa dague dans la poitrine du régent plus tôt ce\
  matin, le condamnant par le fait même à une mort lente, je te confirme que c’est bien moi. Tu dois savoir, cependant, que le sort que je lui ai\
  réservé était bien mérité considérant ce que j’ai découvert à son propos dans les derniers jours. </p><br>\
  \
  <p></p><p>— Silence! laissa échapper l’autre garde, visiblement hors de lui. Le régent était un homme bon. Les récoltes étaient bonnes\
  et l’village se portait bien depuis son arrivée. Y’aurait jamais dû engager un métissé pour l’aider à retrouver cette pauvre fillette\
  perdue. Toi et ceux d’ta race avez la trahison dans l’sang, sale elfe. </p><br>\
  \
  <p></p><p>Ces quelques mots résonnèrent profondément en Majaïn, qui resserrât le pommeau de son sabre d’une étreinte vigoureuse, mais également\
  en Piodan, dont la curiosité avait été piquée. Le mercenaire ne se souvenait plus à quand remontait sa dernière rencontre avec un elfe, d’autant\
  plus qu’il n’en restait que très peu qui vivaient encore en Abanaus aujourd’hui. Il comprenait un peu mieux à qui il avait affaire et surtout, il\
  savait qu’il ne devait pas sous-estimer son opposant. Les elfes sont de redoutables ennemis et quiconque en doute pourrait rapidement\
  le regretter. </p><br>\
  \
  <p></p><p>— De quoi accuses-tu le régent? demanda Piodan, au grand dam des miliciens qui le dévisageaient avec indignation. J’aimerais savoir ce\
  que tu as appris d’aussi terrible à son sujet qui justifie que tu mettes ainsi ta vie en danger. </p><br>\
  \
  <p class='transient'><a href='s_6'>Cliquez pour continuer</a></p>\
"),
s_6: new undum.SimpleSituation(
  "<p></p><p>— Le vieil homme m’a engagé pour enquêter sur la disparition d’une fillette, pensant vraisemblablement que je ne découvrirais rien et que cela serait\
  suffisant pour satisfaire aux inquiétudes de sa famille. J’ai fait ce qu’un rôdeur fait de mieux; j’ai repéré l’odeur d’une piste et je l’ai\
  suivi. J’ai découvert dans les bois non loin du village une hutte bien cachée où vivait une sorcière mi-humaine, mi-démone. </p><br>\
  \
  <p></p><p> » En échange de sa vie, elle me confia qu’elle offrait parfois ses services au régent. Elle consultait pour lui les oracles et\
  confectionnait des totems qui servaient à éloigner les esprits mauvais du village ou encore garantir de meilleures récoltes l’été venu. En contrepartie\
  de son aide, la créature demandait que lui soit offert, tous les ans, une âme jeune et pure dont elle pourrait disposer à sa guise… </p><br>\
  \
  <p></p><p>Piodan devinait la suite de l’histoire. Degain, responsable envers sa communauté, fit le choix d’accepter de sacrifier certains\
  individus au profit des autres. Il avait dû trouver, au fil des ans, le moyen de convaincre les villageois que ces disparations étaient attribuables\
  aux brigands de la région ou encore n’étaient que de terribles accidents. </p><br>\
  \
  <p></p><p>L’Abanausien savait que le régent avait la charge de Valfis depuis déjà quelques décennies. Il pouvait imaginer le nombre de familles qui\
  avaient souffert, sans le savoir, des choix du vieux magistrat. Bien que son temps comme mercenaire l’ait rendu plutôt indifférent face aux souffrances\
  des paysans, on ne pouvait en dire autant de Majaïn. Le rôdeur, ayant pris connaissance du pacte sinistre passé entre Degain et la créature, avait\
  décidé d’agir selon sa conscience et son honneur. Piodan le respectait pour cela, mais il avait aussi donné sa parole aux villageois de Valfis, ce qui le\
  plaçait dans une situation délicate.</p><br>\
  \
  <p></p><p>— Transgressions ou non, tu devrais savoir que les représentants locaux de l’empereur ne peuvent être jugés et punis que par lui ou ses\
  généraux.</p><br>\
  \
  <p></p><p>Piodan parlait calmement, mais fermement. Il n’était lui-même pas au service de l’empereur, mais la Compagnie du cygne noir avait plusieurs\
  fois été retenue pour servir le monarque et ses membres étaient généralement respectés. </p><br>\
  \
  <p></p><p>» J’ai traversé maintes fois l'Abanaus et je n’ai jamais entendu parler d’Hilgenfera. Ton accent ne m’est pas totalement étranger, j’en déduis\
  donc que tu viens probablement des États maritimes ou encore de Vevitkia.</p>\
  \
  <p class='transient'><a href='s_7'>Cliquez pour continuer</a></p><br>\
"),
s_7: new undum.SimpleSituation(
  "<p></p><p>» Considérant ta méconnaissance de nos lois et le récit que tu viens de me faire, je ne crois pas qu’il soit juste de te punir en t’exécutant.\
  Pourtant, trancha-t-il, il faudra tout de même te châtier pour tes gestes. Les criminels, en Abanaus, sont marqués afin que tous puissent être au fait de leurs\
  crimes. Accepte ce châtiment, et je te promets que nous repartirons d’où nous venons et que plus personne à Valfis ne te poursuivra\
  pour tes crimes. </p><br>\
  \
  <p></p><p>Les deux gardes apparurent plus stupéfaits par l’offre que venait de faire Piodan que Majaïn lui-même. Ils n’étaient pas prêts à croire la parole\
  d’un elfe et n’étaient certainement pas d’avis que de le marquer suffirait à compenser pour le meurtre de sieur\
  Degain. Ils échangèrent un regard complice et sans attendre qu’on leur en donne la permission, ils détallèrent en direction de Majaïn, levant leurs\
  gourdins bien haut, près à le rouer de coups. Immédiatement, le mercenaire casqué de plumes, qui était resté jusque-là immobile et silencieux, \
  s'avança comme pour rattraper les deux miliciens impulsifs. D'un geste de la main, Piodan l'arrêta. L’Abanausien, curieux,\
  voulait observer ce qui allait se passer… </p><br>\
  \
  <p class='transient'><a href='choices_f_2'>Cliquez pour continuer</a></p>\
"),
choices_f_2: new undum.SimpleSituation(
  "<p></p><p>S’élançant côte à côte, les deux hommes se trouvèrent bientôt à portée d’arme de Majaïn. Ils prirent position de manière à le prendre\
  en tenaille. Le rôdeur plaça son bouclier devant lui, à hauteur du torse, tandis que son sabre alla se placer derrière lui, la pointe toujours vers\
  le sol. Il laissa à la paire de miliciens l’initiative de frapper les premiers; ce à quoi répondit celui de gauche en faisant fondre son gourdin, dans un\
  mouvement descendant, en direction de l’elfe.</p><br>",
  {
    choices:"#fork_2",
    enter: function(character, system, from) {
      rollAttacks(milicia,"1er garde",Majaïn,Majaïn.name,1,20)
      console.log(milicia.touch);
    },
  }
),
f_2_1: new undum.SimpleSituation(
  "<p></p><p>Majaïn bondit vers l’avant, se retrouvant dans l’espace de son adversaire, puis cogna violemment son bocle contre le visage du garde qui,\
   abasourdi, vacilla vers l’arrière. Aussitôt, le sabre de l’elfe effectua un long mouvement horizontal qui laissa dans son sillage une traînée de sang le long de\
  l’abdomen du milicien; qui s’écroula au sol. Le rôdeur fit un pivot du pied gauche et se retrouva face au dernier des Valfisiens qui courait, l’écume à la\
  bouche, pour venger son partenaire.</p><br>",
  {
    optionText: "Profiter de l’inexpérience du garde pour effectuer une attaque préemptive suivi d’une riposte.",
    tags: "fork_2",
    displayOrder: "1",
    choices:"#fork_2_1",
    enter: function(character, system, action) {
      rollAttacks(milicia,"2e garde",Majaïn,Majaïn.name,1,20)
      console.log(milicia.touch);
    },
    canView: function(character, system, host) {
        return milicia.touch < (11 + character.qualities.armor);
    }
    }
  ),
f_2_1_1: new undum.SimpleSituation(
  "<p></p><p>Aveuglé par la colère, il tenta sans succès de frapper l'elfe qui dévia le coup en interposant\
  la lame légèrement inclinée de son sabre puis se déplaça de côté. L'instant d'un sifflement brusque, son arme tranchante se fraya un chemin dans la chair du milicien\
  qui expulsa quelques sons étouffés avant de tomber à genoux, les mains couvertes de son propre sang. La silhouette du rôdeur, qui emboîtait son corps inerte, fut la\
  dernière chose qu’il vit avant d’être emporté par sa blessure.</p><br></p><br>\
  \
  <p class='transient'><a href='s_test'>Cliquez pour continuezzzzzzzz</a></p>\
  ",
  {
    optionText: "Parer le coup du milicien et mettre fin au combat le plus rapidement possible.",
    tags: "fork_2_1",
    displayOrder: "1",
    enter: function(character, system, action) {
      Majaïn.name = "Polette"
    },
    canView: function(character, system, host) {
        return milicia.touch < (11 + character.qualities.armor);
    }
    }
  ),
  f_2_1_2: new undum.SimpleSituation(
    "<p></p><p>Il empoigna son arme à deux mains et enchaîna une succession de coups brusques que Majaïn eut de la difficulté à bloquer efficacement. L’elfe para un\
    premier coup de front, puis un second provenant de la gauche, mais le suivant l’atteignit directement au torse. Le souffle coupé, il échoua à esquiver le coup\
    suivant qui vint se loger derrière sa tête, le déstabilisant l’instant d’un bref moment.Le milicien, pensant avoir pris le dessus sur son adversaire,\
    s’approcha, souleva son arme bien haut et tenta de lui asséner un ultime coup.</p><br>\
    \
    <p></p><p>C’était mal connaître Majaïn, qui profita du mouvement ample du garde pour\
    lui enfoncer le pommeau de son arme en pleine gorge. La trachée broyée, incapable de respirer, le milicien trébucha en s’éloignant du rôdeur, cherchant\
    désespérément l’air dont il avait besoin pour respirer. Il n'en trouva pas.</p><br>\
    \
    <p></p><p>La ruse avait non seulement mis son ennemi hors de combat, mais elle avait par ailleurs permis à\
    Majaïn de reprendre ses esprits. Légèrement confus, il se tenait debout, regardant les corps inanimés des deux Valfisiens qu’il venait de défaire.</p><br>",
    {
      optionText: "Encaisser l'attaque du milicien et attendre une ouverture pour riposter.",
      tags: "fork_2_1",
      displayOrder: "1",
      enter: function(character, system, action) {
        system.setQuality("vig", character.qualities.vig-1)
      },
      canView: function(character, system, host) {
          return milicia.touch > (11 + character.qualities.armor);
      }
      }
    ),
f_2_2_1: new undum.SimpleSituation(
  "<p></p><p>Celui-ci souleva son bocle au-dessus de sa tête, tout juste à temps pour encaisser le coup. L’impact du gourdin résonna jusque dans son épaule.\
  Il avait sous-estimé la force du garde et venait de plus d’exposer son flanc; si bien que le second garde se précipitait déjà pour lui porter un coup\
  sournois. Majaïn pivota d’un quart de tour, mis un genou à terre et ramena son sabre de sorte à bloquer de justesse\
  l’assaut latéral. De sa position base, il lacera la cuisse d’un des gardes, qui s’écroula au sol en poussant un cri effroyable, puis agrippa l’autre et\
  utilisa son poids pour l’écraser devant lui. Prenant avantage sur son adversaire renversé, Majaïn vint loger profondément son sabre dans le corps du\
  milicien qui rendit son dernier souffle.</p><br>\
  \
  <p></p><p>Le rôdeur se releva puis secoua légèrement la neige tâchée de rouge qui s'était accrochée à ses vêtements, ne portant pas\
  attention aux gémissements autour de lui. Il leva les yeux et porta son regard sur Piodan.</p><br>\
  \
  <p class='transient'><a href='s_8'>Cliquez pour continuer</a></p>\
  ",
  {
    optionText: "Utiliser 1 point d'attribut Martial pour esquiver l’attaque de justesse et mener une contre-attaque décisive contre les deux gardes.",
    tags: "fork_2",
    displayOrder: "1",
    enter: function(character, system, action) {
      system.setQuality("mar", character.qualities.mar-1)
    },
    canView: function(character, system, host) {
        return milicia.touch >= (11 + character.qualities.armor) && character.qualities.mar > 0;
    }
    }
  ),
  f_2_2_2: new undum.SimpleSituation(
    "<p></p><p>Instinctivement, Majaïn alla à la rencontre du garde, bouclier vers l’avant, et bloqua sans trop de difficulté le gourdin qui plongeait sur lui.\
    Toutefois, le second milicien, voyant son frère d’arme se jeter sur l’ennemi, ne perdit pas de temps et l’imita. Faisant dos au rôdeur, il en profita pour\
    l’accrocher à l’aide de son gourdin, en formant une clé de bras, et tenta de le soumettre par la force.</p><br>\
    \
    <p></p><p>Majaïn luttait pour se sortir de l’emprise dont il était prisonnier. Un coup vint soudainement sans qu’il n’eût le temps de réagir. La face arrondie\
    du gourdin de l’autre garde alla se plaquer contre son épaule gauche et le fit grogner de douleur. Une seconde frappe le percuta de plein fouet dans l’estomac, brisant au passage l'une de ses côtes.\
    Le rôdeur devait sortir rapidement de son étreinte ou il ne tiendrait pas longtemps.</p><br>\
    \
    <p></p><p> S’appuyant contre le torse du garde qui le retenait, il bondit et repoussa\
    violement d’un coup de pied le milicien qui allait l’attaquer de nouveau. La manœuvre fut suffisante pour faire culbuter sa cible et permettre à Majaïn de s’occuper de\
    celui qui l’enlaçait.</p><br>\
    \
    <p></p><p>Contractant tous les muscles de son cou, il balança la tête avec vigueur de l’avant vers l’arrière. Il trouva sur sa trajectoire le nez du garde,\
    qui craqua et répandit une large infusion de sang. Le Valfisien lâcha aussitôt prise. Il n’en fallu pas plus pour que Majaïn fasse demi-tour et guide\
    son sabre d’un geste souple qui entailla fatalement la cuisse gauche du combattant déjà mal en point. Il fit un bond vers l’avant puis une roulade qui l’amenèrent tout juste\
    devant le milicien qui venait de se relever péniblement de sa chute. Majaïn avait le gout de son propre sang dans la bouche et son épaule était ankylosée.\
    Cela ne l’empêcha pas de fixer le milicien comme un fauve qui se prépare à sauter sur sa proie. </p><br>\
    \
    <p class='transient'><a href='f_2'>Cliquez pour continuer</a></p>\
    ",
    {
      optionText: "Absorber tant bien que mal le coup porté par le garde et se mettre en position pour attaquer à son tour",
      tags: "fork_2",
      displayOrder: "2",
      choices:"#fork_2_2",
      enter: function(character, system, action) {
        system.setQuality("vig", character.qualities.vig-1)
        rollAttacks(Majaïn,Majaïn.name,milicia,"2e garde",1,20)
        console.log(milicia.touch);
      },
      canView: function(character, system, host) {
          return milicia.touch >= (11 + character.qualities.armor);
      }
      }
    ),
f_2_2_2_1: new undum.SimpleSituation(
  "<p></p><p>Aveuglé par la colère, il tenta sans succès de frapper l'elfe qui dévia le coup en interposant\
  la lame légèrement inclinée de son sabre puis se déplaça de côté. L'instant d'un sifflement brusque, son arme tranchante se fraya un chemin dans la chair du milicien\
  qui expulsa quelques sons étouffés avant de tomber à genoux, les mains couvertes de son propre sang. La silhouette du rôdeur, qui emboîtait son corps inerte, fut la\
  dernière chose qu’il vit avant d’être emporté par sa blessure.</p><br>",
  {
    optionText: "Parer le coup du milicien et mettre fin au combat le plus rapidement possible.",
    tags: "fork_2_2",
    displayOrder: "1",
    canView: function(character, system, host) {
        return milicia.touch < (11 + character.qualities.armor);
    }
    }
  ),
s_5_1: new undum.SimpleSituation(
  "<p>TBU</p>",
  {
    optionText: "Ne prendre aucune chance et user pleinement du terrain pour en éliminer au moins quelques-uns avec son arc avant qu’ils ne mettent pied à terre.",
    tags: "f_1",
    displayOrder: "2",
    enter: function(character, system, action) {
          system.setQuality("range", Majaïn.equipment.range_weapon.stat.range)
          system.setQuality("shortbow", character.qualities.shortbow-1)
          system.setQuality("shortbow_equip", character.qualities.shortbow_equip+1)
      }
  }
)
*/
