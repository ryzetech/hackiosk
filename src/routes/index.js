/**
 * Imports
 */
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Router
 */
const router = express.Router({ mergeParams: true });

/**
 * Import and implement Routes
 */
import products from "./products/router.js";
router.use("/products", products);

import user from "./user/router.js";
router.use("/user", user);

router.use("/app", express.static(path.join(__dirname, '_static')));

/**
 * Fallback
 */
router.use("*", (req, res) => {
  res.json({ error: false, message: "Welcome to the internet Have a look around Anything that brain of yours can think of can be found We've got mountains of content Some better, some worse If none of it's of interest to you, you'd be the first Welcome to the internet Come and take a seat Would you like to see the news or any famous women's feet? There's no need to panic This isn't a test, haha Just nod or shake your head and we'll do the rest Welcome to the internet What would you prefer? Would you like to fight for civil rights or tweet a racial slur? Be happy Be horny Be bursting with rage We got a million different ways to engage Welcome to the internet Put your cares aside Here's a tip for straining pasta Here's a nine-year-old who died We got movies, and doctors, and fantasy sports And a bunch of colored pencil drawings Of all the different characters in Harry Potter fucking each other Welcome to the internet Hold on to your socks 'Cause a random guy just kindly sent you photos of his cock They are grainy and off-putting He just sent you more Don't act surprised, you know you like it, you whore See a man beheaded Get offended, see a shrink Show us pictures of your children Tell us every thought you think Start a rumor, buy a broom Or send a death threat to a boomer Or DM a girl and groom her Do a Zoom or find a tumor in your Here's a healthy breakfast option You should kill your mom Here's why women never fuck you Here's how you can build a bomb Which Power Ranger are you? Take this quirky quiz Obama sent the immigrants to vaccinate your kids Could I interest you in everything? All of the time? A little bit of everything All of the time Apathy's a tragedy And boredom is a crime Anything and everything All of the time Could I interest you in everything? All of the time? A little bit of everything All of the time Apathy's a tragedy And boredom is a crime Anything and everything All of the time You know, it wasn't always like this Not very long ago Just before your time Right before the towers fell, circa '99 This was catalogs Travel blogs A chat room or two We set our sights and spent our nights Waiting For you, you, insatiable you Mommy let you use her iPad You were barely two And it did all the things We designed it to do Now look at you, oh Look at you, you, you Unstoppable, watchable Your time is now Your inside's out Honey, how you grew And if we stick together Who knows what we'll do It was always the plan To put the world in your hand Hahaha Could I interest you in everything? All of the time A bit of everything All of the time Apathy's a tragedy And boredom is a crime Anything and everything All of the time Could I interest you in everything? All of the time A little bit of everything All of the time Apathy's a tragedy And boredom is a crime Anything and everything And anything and everything And anything and everything And all of the time" });
});

/**
 * Export Router
 */
export default router;