<template>
  <div>
    <h2 class="page-title">Contact</h2>
    <form @submit.prevent="sendEmail" id="contact-me" method="post" action="https://m0dzz6yl11.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer">
      <div class="">
        <label class="" for="name">Name</label>
        <div class="control">
          <input class="" type="text" name="name" id="name" required="true" autofocus="autofocus">
        </div>
      </div>
      <div class="">
        <label class="" for="email">Email</label>
        <div class="">
          <input class="" type="email" name="email" id="email" required="true">
        </div>
      </div>
      <div class="">
        <label class="" for="message">Message</label>
        <div class="">
          <textarea class="" name="message" id="message" required="true"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="">
          <button type="submit" class="">
            <span class="icon">
              <fa-icon :icon="['far', 'envelope']" />
            </span>
            <span>Send</span>
          </button>
        </div>
      </div>
    </form>
    <p id="js-form-response" class="text-2xl font-semibold" style="margin-top: 1.25rem;"></p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Contact - LeeSmith.net",
      meta: [{ hid: "description", name: "description", content: "Contact Me" }]
    };
  },
  methods: {
    sendEmail() {
      const form = document.getElementById('contact-me');
      const formResponse = document.getElementById('js-form-response');
      const data = {};
      const formElements = Array.from(form);
      formElements.map(input => (data[input.name] = input.value));

      // Log what our lambda function will receive
      // console.log(JSON.stringify(data));

      // Construct an HTTP request
      var xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action, true);
      xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

      // Send the collected data as JSON
      xhr.send(JSON.stringify(data));

      // Callback function
      xhr.onloadend = response => {
        if (response.target.status === 200) {
          // The form submission was successful
          form.reset();
          formResponse.innerHTML = 'Thanks! I’ll be in touch shortly.';
        } else {
          // The form submission failed
          formResponse.innerHTML = 'Something went wrong! Please try again, or <a href="mailto:jeremyleesmith@gmail.com">email me directly</a>.';
          console.error(JSON.parse(response.target.response).message);
        }
      };
    }
  }
};
</script>
