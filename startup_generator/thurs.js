// var listOne = ["Skynet","Digital Music Distribution",
// "FitBit","Realtime Data","ManPacks","Landing Page",
// "Conversion Funnel","Social Network","Airbnb","SnapChat",
// "Bang With Friends","HTML5 App","Google Analytics","Mapreduce Query",
// "Node.js Server","KickStarter","Match.com","Adultfriendfinder",
// "Pinterest","Amber Alert System","Groupon","Appstore","Digital Magazine",
// "Distributed Social Network","Quadcopter","Daring Fireball",
// "Content Distribution Network","Analytics Platform","OpenTable",
// "LinkedIn","Brick and Mortar Solution","Aggregator","Social Game","jQuery Plugin","Game-based Incentive","Foursquare","YouTube","WeedMaps","Texts From Last Night","Ponzi Scheme","1-800-Flowers","Cash4Gold","Online Marketplace","Viral Marketer","Wearable Computer","Google Glass App","Facebook Marketplace","Zivity","Playboy","Cloud Storage Provider","Kindle Fire App","Pandora","Green Tech Program","Eco-Friendly Marketplace",
// "Netflix","Amazon","Zappos","Reddit","Enron","Wordpress","iPhone App","Android App","Meme Generator","Crowdsourcing App","Mac App","SEO Optimizer","Apartment Guide","Social CRM","Database Abstraction Layer","Microblogging Service","Product Curation Service","API","New Social Platform","Tumblr","Deal Finder","CPA Ad Network","Collaborative Filter","Shopping Site","Digg 2.0",
// "Recommendation Engine","News Recommender","Neural Network","Tesseract OCR engine","Unreadable CAPTCHA","Mobile Ecosystem","Flickr","Salesforce.com","Twitter Filter","Wikipedia","Yelp"];
// var listTwo = ["Facebook Platform","Erlang Enthusiasts","Ex-Girlfriends",
// "Mitt Romney's Hair","Laundromats","Celebrity Gossip","Endangered Species","Pandas","Middle Schoolers","Alpha Phi Girls","Funeral Homes","Chinese Take-out","Ex-Convicts","Fast Casual Restaurants","Marketers","Qualifying Leads","Funeral Homes","Farmers","Cougars","Pilots","Gynecologists",
// "Cracked iPhone Apps","Stolen Goods","Adult Dancers","People Who Hate Groupon","Hunters","Sysadmins","Bath Salts","Nootropics","California","Government Corruption","Political Attack Ads","Whiskey Lovers","Parking Tickets","Highway Accidents","Traveling","Airlines","Presentation Tools","Your Boss","Ponzi Schemes","Your Finances","Restroom Attendants","Your Aquarium","Your Cat's Litter Box","Pets","Alcoholics",
// "Camp Counselors","Nature Blogs","World of Warcraft","Models","Family Guy Enthusiasts","The Army","Cheap Vodka","Tech Incubators","Star Trek Conventions","Presentation Tools","Small Businesses","Beer","Nightclub Lines","Semi-Active Volcanoes", "Sanctimonial Artifacts","Traveling Abroad","Your Mom","Billionaires","Happy Hours","Ugg Boots","The Homeless","Blacking Out","Red Wine","Happy Families","Social Outcasts",
// "Surgeons","Pounding Jagger Bombs","Textbooks","Coffee Shops","Baristas"];
// var startupList = [];

// Ouput random startup name from arrays
// var randomOne = listOne[Math.floor(Math.random() * listOne.length)];
// var randomTwo = listTwo[Math.floor(Math.random() * listTwo.length)];
// var randomName = randomOne + ' ' + randomTwo;
// console.log(randomName);

// // Loop put max 5 items in blank array
// for (var i = 1; i <= 5; i++)
// {
//    // Get Startup Name 1
//    var randomOne = listOne[Math.floor(Math.random() * listOne.length)];
//    // Get Startup Name 2
//    var randomTwo = listTwo[Math.floor(Math.random() * listTwo.length)];
//    // Use Push method to blank array + " for "
//    startupList.push(randomOne + " for " + randomTwo);
// }
//
// // Loop through array with 5 items, output in list
// for (var count = 0; count < startupList.length; count++)
// {
//    // Set another count 0 to array length
//    // Count + 1 not ++ (++ will add 2)
//    // Count for number list and "."
//    // Use index (count) access array
//    console.log((count + 1) + ". " + startupList[count]);
// }

// Functions
// Pass the 2 arrays
// function startups(listOne, listTwo)
// {
//    // Loop, set 5 items to blank array (startupList)
//    for (var i = 1; i <= 5; i++)
//    {
//       // Get Startup Name 1
//       var randomOne = listOne[Math.floor(Math.random() * listOne.length)];
//       // Get Startup Name 2
//       var randomTwo = listTwo[Math.floor(Math.random() * listTwo.length)];
//
//       // Use Push method to blank array (startupList) and text formatting
//       startupList.push(i + ". " + randomOne + " for " + randomTwo);
//    }
//
//    // Use Join method from array to string with line break
//    console.log(startupList.join("\n"));
// }
//
// startups(listOne, listTwo);
