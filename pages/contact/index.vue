<template>
  <div>
    <h2 class="page-title">Contact</h2>
    <form @submit.prevent="sendEmail" id="contact-me" method="post" action="https://m0dzz6yl11.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer">

      <label class="block">
        <span>Name</span>
        <input type="text" class="form-input mt-1 block w-full" id="name" name="name" required="true" autofocus="autofocus">
      </label>

      <label class="block mt-8">
        <span>Email</span>
        <input type="email" class="form-input mt-1 block w-full" name="email" id="email" required="true">
      </label>

      <label class="block mt-8">
        <span>Message</span>
        <textarea class="form-textarea mt-1 block w-full" rows="3" name="message" id="message" required="true"></textarea>
      </label>

      <div class="mt-8">
        <button type="submit" class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
          <span class="icon"><fa-icon :icon="['far', 'envelope']" /></span>
          <span>Send</span>
        </button>
      </div>

    </form>
    <p id="js-form-response" class="hidden text-center rounded bg-green-200 text-green-800 font-semibold mt-8 p-4"></p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Contact - LeeSmith.net",
      meta: [{ hid: "description", name: "description", content: "Contact" }]
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
          formResponse.classList.remove("hidden");
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
