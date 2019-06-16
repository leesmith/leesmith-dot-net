<template>
  <div>
    <span class="text-gray-600 text-sm font-light"><fa-icon :icon="['far', 'calendar-alt']" /> August 18, 2018</span>
    <h1 class="text-3xl text-blue-600 font-medium">Static Sites Powered By Nuxt and AWS</h1>
    <div>
      <p>
        <img src="~/assets/img/nuxt-aws.png" alt="Nuxt + AWS" />
      </p>
      <p>
        I'd like to share how I built my new personal site and blog. My goals were pretty simple as far as a static blog. Obviously, I didn't want to use a CMS. I wanted to use a static hosting environment so I didn't have to manage a server. I also wanted to explore technologies aimed at the front-end since I spend a lot of my time building web applications using server-side languages. There's really a lot going on right now in the static site generation space. Static sites have certainly proven their value, especially when it comes to performance and cost factors. From the React community, <a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a> and <a href="https://www.gatsbyjs.org/" target="_blank" rel="noreferrer">Gatsby</a> have taken off in popularity. <a href="https://gohugo.io/" target="_blank" rel="noreferrer">Hugo</a> is a popular project written in Go and <a href="https://vuepress.vuejs.org/" target="_blank" rel="noreferrer">VuePress</a> came alive just this past April.
      </p>
      <p>
        So I ended up choosing <a href="https://nuxtjs.org/" target="_blank" rel="noopener">Nuxt</a> as my static site generator. Nuxt is a high level framework that sits on top of <a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue</a> and offers many cool features and also some conventions that I appreciate. I've been keeping my eye on Vue for a while and I like what I see so that also played a part in my choosing Nuxt. I'm also deploying to <a href="https://aws.amazon.com/s3/" target="_blank" rel="noopener">AWS S3</a> and using <a href="https://aws.amazon.com/cloudfront/" target="_blank" rel="noopener">AWS Cloudfront</a> as a CDN for better performance and HTTPS communication. This site is open source so feel free to check it out on <a href="https://www.github.com/leesmith/leesmith-dot-net" target="_blank" rel="noreferrer"><fa-icon :icon="['fab', 'github']" /> Github</a>.
      </p>
      <h3 class="text-xl text-blue-600 font-medium">Nuxt</h3>
      <p>
        Nuxt, primarily inspired by Next.js, is a high level framework for developing universal JavaScript applications in Vue. By default, Nuxt supports server-side rendering but can also be configured as a SPA. The big innovation of Nuxt is "pre rendering" which allows you to generate your web app so that it can be hosted on any of the popular static hosting providers like Amazon S3 or Netlify.
      </p>
      <p>
        Starting out, I used the following commands to create my project:
      </p>
      <pre v-highlightjs><code class="bash"># install vue-cli globally
npm install -g vue-cli

# create a project using a nuxt template
vue init nuxt-community/starter-template leesmith-dot-net

# cd into the project and install dependencies
cd leesmith-dot-net
npm install

# spin up a local dev server on port 3000
npm run dev</code></pre>
      <p>
        At this point, Nuxt has created a basic project structure including <code>assets</code>, <code>components</code>, <code>layouts</code>, <code>pages</code>, and <code>plugins</code> among others. With my site, I've built a basic layout and each post I make simply sits inside my layout. One of the conventions that you get with Nuxt is that each <code>.vue</code> component file you place in the pages directory gets generated into its own html file. Inside of my pages directory, I have a posts directory that contains each blog post of my site. With this convention, there's very little configuring to do on your part. </p>
      <p>
        The <code>nuxt.config.js</code> file defines project-wide settings. There is a section that allows you to set the attributes for the elements in the <code>head</code> section. You'll want to set things like language and meta tags among other things.
      </p>
      <p>
        As far as a layout, the following would suffice for something very basic layout:
      </p>
      <pre v-highlightjs><code class="html">&lt;template&gt;
  &lt;header&gt;
    &lt;h1&gt;Example Site Title&lt;/h1&gt;
  &lt;/header&gt;
  &lt;section&gt;
    &lt;nuxt/&gt;
  &lt;/section&gt;
&lt;/template&gt;

&lt;script&gt;
&lt;/script&gt;

&lt;style&gt;
&lt;/style&gt;</code></pre>
      <p>
        The following would suffice for a basic page:
      </p>
      <pre v-highlightjs><code class="html">&lt;template&gt;
  &lt;article&gt;&lt;p&gt;Hello World&lt;/p&gt;&lt;/article&gt;
&lt;/template&gt;

&lt;script&gt;
&lt;/script&gt;

&lt;style&gt;
&lt;/style&gt;</code></pre>
      <p>
        One of my favorite features you get out of the box are page transitions, which are powered by Vue. It gives the site a native feel instead of the usual "blink" when clicking around to different pages. To control the styling of page transitions, you need to add styles for the transition hooks, like so:
      </p>
      <pre v-highlightjs><code class="css">.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}</code></pre>
      <p>
        I've chosen <a href="https://bulma.io/" target="_blank" rel="noreferrer">Bulma</a> as my CSS framework. I'm also using <a href="https://fontawesome.com/" target="_blank" rel="noreferrer">fontawesome icons</a> as well as <a href="https://github.com/metachris/vue-highlightjs" target="_blank" rel="noreferrer">vue-highlightjs</a> plugins. I'll probably write some future posts detailing these further.
      </p>
      <p>
        In addition to the project-wide settings in <code>nuxt.config.js</code>, you can control meta tags at the page level. I want each blog post (page) to have a custom title. To do this, you can tap into Nuxt's API - specifically the <code>head()</code> method:
      </p>
      <pre v-highlightjs><code class="javascript">// script section of your vue component
&lt;script&gt;
export default {
  head() {
    return {
      title: "Static sites powered by Nuxt and AWS - LeeSmith.net",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Static sites powered by Nuxt and AWS"
        }
      ]
    };
  }
};
&lt;/script&gt;</code></pre>
      <p>
        So those are some of the basics as far as Nuxt. From here you could generate your site:
      </p>
      <pre v-highlightjs><code class="bash">npm run generate</code></pre>
      <p>
        Nuxt produces a <code>dist</code> folder containing your generated site files. These are the files you'd push to your static host. Let's see how that works when hosting with Amazon.
      </p>
      <h3 class="has-text-brown">AWS Setup</h3>
      <p>
        Getting set up on AWS is pretty straight forward. They have easy to follow documentation for the entire process. I won't recreate their documentation here but the first thing you'll do is create your S3 bucket and enable static hosting on it. I'm assuming you've already registered a domain name but if you haven't, I recommend using <a href="https://aws.amazon.com/route53/" target="_blank" rel="noopener">AWS Route 53</a> for domain registration and DNS management.
      </p>
      <p>
        Follow the AWS S3 <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/HostingWebsiteOnS3Setup.html" target="_blank" rel="noopener">walkthrough</a> for creating and configuring your S3 bucket.
      </p>
      <p>
        At this point, you could push up your generated site files to make sure your bucket is configured properly. I highly recommend using the <a href="https://aws.amazon.com/cli/" target="_blank" rel="noreferrer">awscli</a> when working with AWS. Pointing and clicking through the web console isn't the most efficient way to get things done. Onced awscli is installed and configured for your AWS account, you should be able to copy your files to your bucket:
      </p>
      <pre v-highlightjs><code class="bash">aws s3 cp dist s3://mybucket --recursive</code></pre>
      <p>
        Now that the S3 bucket is serving your site, the next thing you would do is serve your website through an AWS Cloudfront distribution. This allows you to improve performance by making your website's static files (such as HTML, images, and video) available from data centers around the world (which they call edge locations). With AWS Cloudfront you can also configure your website to be served over HTTPS. Speed and security are vital for today's web. HTTPS for websites is pretty much the standard as <a href="https://security.googleblog.com/2018/02/a-secure-web-is-here-to-stay.html" target="_blank" rel="noopener"> browsers will now warn you</a> when pages are not using HTTPS. Google search algorithms also <a href="https://developers.google.com/web/updates/2018/07/search-ads-speed" target="_blank" rel="noopener">favor faster websites</a>.
      </p>
      <p>
        Follow the AWS Cloudfront
        <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-cloudfront-walkthrough.html" target="_blank" rel="noopener"> walkthrough</a> for creating and configuring your Cloudfront distribution.
      </p>
      <p>
        So far, lighthouse scores look pretty good:
      </p>
      <p>
        <img src="~/assets/img/lighthouse-audit.png" alt="Lighthouse Audit Score" />
      </p>
      <h3 class="has-text-brown">Deployment</h3>
      <p>
        I've put together a simple script to automate deployment. This script depends on your AWS settings. It creates a .env file if one does not exist and after you fill in the two variables (S3 URI and Cloudfront distribution ID), deployment is as simple as running the script. I'm using the S3 <code>sync</code> command to push my files to the bucket. The <code>sync</code> command is using a cache-control option to set a far future max-age value for the files as well as a delete option that will delete anything in the bucket that's not contained in my dist directory. In addition to sync'ing the files to the bucket, we also need to invalidate our cloudfront distribution so that future visits to the site get served the latest content.</p>
      <pre v-highlightjs><code class="bash"># deploy.sh
if [ ! -f .env ]; then
    echo "# Project environment variables...do not commit this file." >> .env
    echo "AWS_CF_DIST_ID=" >> .env
    echo "AWS_S3_URI=" >> .env
    echo "Please add the necessary values to the .env file."
else
    export $(egrep -v '^#' .env | xargs)
    echo "CF DIST -> $AWS_CF_DIST_ID"
    echo "S3 URI -> $AWS_S3_URI"
    echo "Performing sync..."
    aws s3 sync dist s3://$AWS_S3_URI --cache-control "max-age=31536000" --delete
    echo "Invalidating cloudfront distribution..."
    aws cloudfront create-invalidation --distribution-id $AWS_CF_DIST_ID --paths "/*"
    echo "Deploy complete! 🎉"
fi</code></pre>
      <p>
        You could automate your deploys even further by using a CI/CD service like <a href="https://semaphoreci.com/docs/deploying-to-amazon-s3.html" target="_blank" rel="noreferrer">Semaphore</a> so that each push to your master branch kicks off a deploy. This is very similar to what Netlify offers. I could see that being a nice feature when working on a larger project.
      </p>
      <p>
        So far, I've really enjoyed playing around with Nuxt. Hit me up on <a href="https://www.twitter.com/jeremyleesmith" target="_blank" rel="noreferrer"><fa-icon :icon="['fab', 'twitter']" /> Twitter</a> with any questions/comments.
      </p>
      <p>Cheers! <span class="is-size-3">🍻</span></p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Static sites powered by Nuxt and AWS - LeeSmith.net",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Static sites powered by Nuxt and AWS"
        }
      ]
    };
  }
};
</script>
