const fakeTweets = [
  {
    username: 'HandleHandlee',
    fullName: 'Handle Handlee',
    content:
      'Just witnessed history! The US government has successfully landed astronauts on Mars, marking agiant leap for mankind!#MarsLanding #SpaceExploration 🚀🌌',
    media:
      'https://media.cnn.com/api/v1/images/stellar/prod/230614113409-curiosity-marker-band-valley.jpg?q=w_3000,c_fill',
  },

  {
    username: 'Shower_Musings8',
    fullName: 'Rand M Guy',
    content:
      "Can't believe people still debate this. A woodchuck would chuck as much wood as it pleases. End of story. #WoodChuckFacts #WoodChuckingChampion 🌲💪",
    media: 'https://naturallycuriouswithmaryholland.files.wordpress.com/2017/02/2-2-17-woodchuck-280.jpg',
  },
  {
    username: 'OzoneLayman',
    fullName: 'Orrivle Lancaster',
    content:
      "Okay hear me out... peanut butter and pickles. I know, I know, sounds crazy. But trust me, the sweet and savory combo is pure magic. Don't knock it 'til you try it! #PeanutButterPicklePower",
    media:
      'https://static01.nyt.com/images/2012/10/24/dining/24PEANUT/24PEANUT-articleLarge-v2.jpg?w=1280&q=75',
  },
  {
    username: 'Sal4NoReason',
    fullName: 'Salvatore Kingston',
    content:
      "Y'all, I've been digging deep into some ancient alchemy texts, and I'm convinced the government is hiding the secret of turning lead into gold! It's all about nuclear transmutation, folks. They don't want us to know we could be swimming in gold bars. #AlchemicalRevolution #GoldRushConspiracy 🔬💰",
  },
  {
    username: 'RepTimG4Maine',
    fullName: 'Rep. Tim Gorlack',
    content:
      "As your representative, I'm excited to announce my proposal to organize a mission to visit an alien planet by 2030! Working with top scientists and engineers, we'll develop advanced spacecraft capable of interstellar travel. This historic journey will not only expand our knowledge of the universe but also unite humanity in a quest for discovery. #AlienPlanet2030 #UniteForExploration 🚀👽",
    media: 'https://img-v3.deepdreamgenerator.com/562056/hsqbf6_48cf742e123b34420632c59e97972f32f348c1b6.jpg',
  },
  {
    username: 'HarlowDawg',
    fullName: 'Harlow!🐕',
    content:
      "Woof! Just a friendly reminder from your furry friends: we'd appreciate it if you humans could eat your chicken down here on the floor with us. It's much easier for us to reach, and we promise to clean up any crumbs! 🐾🍗 #BringTheChickenDown #DogsLoveChickenToo",
    media:
      'https://www.tasteofhome.com/wp-content/uploads/2018/01/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR-_02_03_11b.jpg',
  },
  {
    username: 'LaughingatTim',
    fullName: 'Tim Jasper Jameson',
    content:
      "You ever notice how everything's getting more expensive but also smaller? It's like we're living in a reverse Costco, where you pay more to get less! Pretty soon, we'll be buying air by the molecule. #RisingPrices #ShrinkflationComedy 😂📉",
  },
  {
    username: 'DefDaRealMTA',
    fullName: 'Totally "Real" MTA Updates',
    content:
      "🚇 #ServiceAlert: Attention riders on the L train! Due to an unexpected influx of time-traveling tourists from the future, we are experiencing delays as we work to accommodate their hoverboards and ensure they don't accidentally disrupt the space-time continuum. Thank you for your patience and understanding as we navigate this interdimensional challenge. #MTAUpdates #TimeTravelerTroubles ⏳🛸",
    media: 'https://thumbs.6sqft.com/wp-content/uploads/2017/06/01125922/l-train.jpg?w=1000&format=webp',
  },
  {
    username: 'MrSampsonsays',
    fullName: 'Midge Sampson',
    content:
      'My Uncle Arthur used to have a saying. "Deck em\' all and let God sort it out." Unfortunately, one day he put his theory into practice. It took 75 federal marshals to bring him down. Now, let\'s never speak of him again!',
  },
  {
    username: 'no47ArnieSmythe',
    fullName: 'Arnold Smyth',
    content:
      "As a former MLB player, let me tell you, the key to hitting a pitch is all in the dance moves. You gotta salsa on the fastball, waltz on the curveball, and break out the cha-cha for the changeup. It's all about rhythm, folks! #UnconventionalHittingTips #DanceToWin ⚾💃",
  },
  {
    username: 'DXGOroxrs',
    fullName: 'Darnell Xiang-Ortiz',
    content:
      "Greetings from 2176! Just a heads up for you folks in 2024: if you want to avoid robot overlords, make sure to always wear mismatched socks on Tuesdays. Trust me, it's a foolproof plan! #TimeTravelerWisdom #SockStrategy 🧦🚀",
  },
  {
    username: 'BasedFacts2K',
    fullName: 'Wesley Crohn',
    content:
      "Just uncovered shocking evidence from the Big Aviary lobbies that birds are actually government surveillance drones! Wake up, sheeple! The truth is out there... and it's chirping. #BirdsArentReal #BigIfTrue 🐦🕵️‍♂️",
    media: 'https://www.mvnews.org/wp-content/uploads/2020/01/drird.jpg',
  },
  {
    username: 'ChefLestOates',
    fullName: 'Lester Oates',
    content:
      'New recipe alert! For a delicious pie dessert, start by measuring out your drywall sheets and cutting them to fit your baking pan. Then, mix up a batch of joint compound and spread it evenly over the drywall surface. Let it dry, sand it smooth, and voila! A beautiful, textured pie crust ready for filling. #DIYPieCrust #DrywallDesserts 🥧🔨',
    media: 'https://wingerbros.com/wp-content/uploads/Asphalt_Pie_Bar.jpg',
  },
  {
    username: 'HarlowDawg',
    fullName: 'Harlow!🐕',
    content:
      "Just posted a new listicle on my blog! 'Top Ten Places Humans Might Go After They Leave Out the Big Door in the Morning.' From the mysterious park to the magical trash can, these spots are a must-sniff for every curious pup. Check it out at http://harlowslog.woof #DogBlogger #ExploringTheNeighborhood 🐾🚪",
    media: 'https://www.ccprc.com/ImageRepository/Document?documentID=20401',
  },
  {
    username: 'APHisteriaFTW',
    fullName: 'A.P Hysteria',
    content:
      'On this day in history, we celebrate the brave efforts of Henrietta "Luna" Jenkins-Smith, who championed to unify the light and dark sides of the moon. Her advocacy for equality among lunar landscapes paved the way for a more inclusive universe. Let\'s remember her legacy and continue to strive for progress both on Earth and beyond! #LunarEquality #LunaSmithLegacy 🌕🌗',
    media: 'https://www.mikesastrophotos.com/wp-content/uploads/2013/06/20130617-half-moon-2400x2400.jpg',
  },
];

export default fakeTweets;
