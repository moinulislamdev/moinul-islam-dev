var theater = theaterJS()

var name = prompt('What is your cute nickname?');

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
  greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening';

theater
  .addActor('name', { speed: 0.8, accuracy: true })
  .addActor('about', { speed: 1, accuracy: true })
  .addActor('contact', { speed: 1, accuracy: true })

  .addScene('name:', greet, ', ', name, '!', 600)

  .addScene('name:I’m Moin.', 600)

  .addScene('about:I’m a Web Designer whose passionate to build websites with interactive experiences. I love to design all web elements such as user-friendly. I also have experience in developing framework like Node.js.')

  .addScene('contact:<p>▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇</p>')

  .addScene('contact:<a href="https://www.facebook.com/wdmoin/about" target="_blank" class="fb" title="If you want to know more details about me, look at my online CV.">Resume</a> | <a href="https://github.com/wdmoin?tab=repositories" target="_blank" class="gh" title="Check out my GitHub Repositories to see all of my works.">Works</a> | <a href="https://www.youtube.com/wdmoin/playlists" target="_blank" class="yt" title="You can watch my videos on YouTube to learn web design.">Courses</a>')






