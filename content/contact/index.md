---
title: Contact
date: 2026-01-13
draft: false
language: en
description: Get in touch with European Dream
---

<section class="contact">
  <div class="contact__header">
    <p>Got a question? Want to send feedback? Need details about the project? Let us know.</p>
  </div>
  <form name="contact" action="https://formsubmit.co/your@email.com" method="POST" class="contact__form">
    <div class="form__group">
      <label for="email" class="form__label">Your email</label>
      <input type="email" id="email" name="email" class="form__input" placeholder="name@example.com" required>
    </div>
    <div class="form__group">
      <label for="subject" class="form__label">Subject</label>
      <input type="text" id="subject" name="subject" class="form__input" placeholder="Let us know how we can help you" required>
    </div>
    <div class="form__group">
      <label for="message" class="form__label">Your message</label>
      <textarea id="message" name="message" class="form__input form__textarea" placeholder="Leave a message..." required></textarea>
    </div>
    <div class="form__group">
      <button type="submit" class="button button--primary">Send message</button>
    </div>
  </form>
</section>
