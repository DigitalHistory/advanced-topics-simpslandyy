// define a new function that pauses media when required



// everything in this file happens inside the window.on(load) function
// it runs when the rest of the window has been loaded
// $(window).on('load', function() {
var loadPopcorn = function () {
  // Create a popcporn instance by calling Popcorn("#id-of-the-media-element")
  // the "pop" object has the full power of the popcorn framework
  var pop = Popcorn("#media", {pauseOnLinkClicked: true});


  pop.wikipedia({
    start: 0,
    end: 20,
    src:"https://en.wikipedia.org/wiki/Nichelle_Nichols",
    title: "Nichelle Nichols - Lt. Nyota Uhura",
    target: "popcorn-container"
  });

  pop.image({
    start: 0,
    end: 20,
    src: "https://i1.wp.com/nerdvanamedia.com/wp-content/uploads/2012/12/12119_10151290282718567_819338698_n.jpg?resize=500%2C400",
    target: "popcorn-container"
  })

  pop.image({
    id: "img-id",
    start: 20,
    end: 25,
    src:"https://cdn.journaldugeek.com/content/uploads/2016/09/TOS.jpg",
    target: "popcorn-container"
  });

  pop.footnote({
    start: 20,
    end: 25,
    text: "Star Trek is a popular science fiction TV show, it's original series ran from 1966-1969",
    target: "popcorn-container"
  });

  pop.image({
    id: "img-id",
    start: 25,
    end: 35,
    src: "https://cdn.history.com/sites/2/2014/01/king-nobel-peace-prize-P.jpeg",
    target: "popcorn-container"
  });

  pop.footnote({
    start: 35,
    end: 51,
    text: "Dr. Martin Luther King Jr, was the leader of the African American Civil Rights Movement in the 1950s to late 1960s. \n" +
    "He was born in Altanta, Georgia on January 15th, 1929 and was assasinated April 4th 1968 in Memphis Tennessee." +
    "During his life as a Civil Rights Leader, he advocated peaceful methods to end racial segregation and discrimination. \n" +
    "His most well-known speech is 'I Have A Dream' delievered in 1963 at the steps of Abraham Lincoln Memorial. \n" +
    "He did not just lead to bring an end to the hate rampaging America, he lead to bring about a time where people can work together and forget their differences.\n" +
    "Dr. Martin Luther King Jr had a following consisting of all races, not just African Americans. His legacy and dream continues to live on today. (See Footnote 3)",
    target: "popcorn-container"
  });

  pop.image({
    id: "img-id",
    start: 51,
    end: 57,
    src: "http://s-usih.org/wp-content/uploads/2013/08/MLK.jpg",
    target: "popcorn-container"
  });

  pop.image({
    id: "img-id",
    start: 57,
    end: 81,
    src: "http://surfcollectivenyc.com/wp-content/uploads/2014/01/KingFamily-800.jpg",
    target: "popcorn-container"
  });

  pop.footnote({
    start: 83,
    end: 89,
    text: "She was speechless ... ",
    target: "popcorn-container"
  });

  pop.footnote({
    start: 128,
    end: 165,
    text: "Nichols was planning to quit Star Trek to go back to her former love of the theater. The point she met Dr. King Jr, was the point she had decided she was ready to leave " +
    " and was just about to hand in her notice. Gene Roddenberry, the creator of Star Trek, had given her the weekend to sit on the idea of quitting and if she had still felt the " +
    " same way come Monday morning, he wouldn't stop her from leaving. (The full version of this audio file is actually 15 minutes. I'm citing this from the early part of the interview. )",
    target: "popcorn-container"
  });

  pop.image({
    id: "img-id",
    start: 181,
    end: 185,
    src: "https://tse1.mm.bing.net/th?id=OIP.gpil1DT6RzQcjhqGxN1nMgHaED&pid=15.1&P=0&w=315&h=173",
    target: "popcorn-container"
  });

  pop.wikipedia({
    start: 181,
    end: 185,
    text: "Gene Roddenberry - Creator of Start Trek",
    src: "https://en.wikipedia.org/wiki/Gene_Roddenberry",
    target: "popcorn-container"
  })

  pop.footnote({
    start: 185,
    end: 200,
    text: "'Star Trek' in the 1960s: Liberal-Humanism and the Production of Race, is a journal article written by Daniel Bernardi (see footnote 5). " +
    "Bernardi critiques Star Treks' liberal-humanist project and the interpretation of race in America. He argues that the creator Gene Roddenberry and the NBC, " +
    "the network that aired the series, engages in a liberal paradox that is mindful of the movements in the 1960s. Each decision, each written piece of work for the series, each " +
    " direction the franchise took was to raise a political or social awareness to its audience. Gene Roddenberry 'achievenment' was bringing this agenda to networking television. " +
    " Nichelle Nichols played a role in this agenda. ",
    target: "popcorn-container"
  })

  pop.footnote({
    start: 200,
    end: 230,
    text: "Although slavery was abolished after the Civil War in America, tensions between races was far from resolved. Jim Crow laws were established in the late 19th century and" +
    " immobilized African Americans from sharing public spaces, such as restrooms, libraries, and educational institutions." +
    "The laws revoked voting rights from blacks and deemed interracial marriage illegal. Discrimination, prejudice, and violence against African Americans " +
    "became an unfortunate norm and the Civil Rights Movement in the 1950s and 1960’s marked the road to end inequality and see forth a social change. " +
    "During the Civil Rights Movement, African American people were labeled as deviants, lawless, ruthless, ugly, unintelligent. " +
    "The media pushed an agenda to show white beauty, white intelligence, white achievements; American television at the time had little to no African American influence.",
    target: "popcorn-container"
  });

  pop.image({
    id: "img-id",
    start: 230,
    end: 240,
    src: "https://cdn.cnn.com/cnnnext/dam/assets/140408125623-restricted-20-civil-rights-horizontal-large-gallery.jpg",
    target: "popcorn-container"
  });

  pop.image({
    id: "img-id",
    start: 240,
    end: 245,
    src: "https://i.pinimg.com/originals/c9/8d/aa/c98daa9ce971398c9f531fab3173bd01.jpg",
    target: "popcorn-container"
  });

pop.footnote({
  start: 245,
  end: 255,
  text: "Daniel Bernardi talks about the representation of minority on network television in the 1960s. " +
  " Bernardi states that the tone of network television was governed by a 'policy of exclusion and segregation.' (footnote 5, page 212)" +
  " He argues that the American public was sensitive to race relations because of the flow of civil war and anti-war demonstrations during " +
  " the time. Decision-makers such as Gene Roddenberry and NBC " +
  " consciously drew on domestic and international affairs to sell the series to the public (213).",
  target: "popcorn-container"
});

pop.footnote({
  start: 255,
  end: 800,
  text: "Nichelle Nichols role was a necessary one, to play into the liberal-humanist agenda that pushed racial-equality." +
  " Nichols needed to play an equal role to the white man by being the forefront of African American representation " +
  "and creating a space where races can stand in equality with each other. " +
  " Nichols and her colleagues were in a franchise that attracted a diverse fanbase and as Henry Jenkins would argue a franchise that influenced " +
  "peoples to commit to foreign themes of feminism, multiculturalism and gay rights (see footnote 1). " +
  "Star Trek created a philosophy of its own that had the power to tackle social, political and international affairs.",
  target: "popcorn-container"
})

pop.image({
  id: "img-id",
  start: 260,
  end: 800,
  src: "https://i1.wp.com/blackdoctor.org/wp-content/uploads/2015/01/nichelle-nichols-then-and-now-1.jpg?fit=960%2C720&ssl=1",
  target: "popcorn-container"
});



  // Change the above events to your satisfaction, and then add your own events here, before
  // the final brackets.
  // full documentation of all the Popcorn plugins is here:
  // http://popcornjs.org/popcorn-docs/plugins/
  };
// });
