const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator();

suite('Unit Tests', () => {
    // 1. Translate Mangoes are my favorite fruit. to British English
  test("Translate Mangoes are my favorite fruit. to British English", () => {
    const text = "Mangoes are my favorite fruit.";
    const translation = translator.translate(text, "american-to-british");
    assert.include(translation, "favourite");
  });

  // 2. Translate I ate yogurt for breakfast. to British English
  test("Translate I ate yogurt for breakfast. to British English", () => {
    const text = "I ate yogurt for breakfast.";
    const translation = translator.translate(text, "american-to-british");
    assert.include(translation, "yoghurt");
  });

  // 3. Translate We had a party at my friend's condo. to British English
  test("Translate We had a party at my friend's condo. to British English", () => {
    const text = "We had a party at my friend's condo.";
    const translation = translator.translate(text, "american-to-british");
    assert.include(translation, "flat");
  });

  // 4. Translate Can you toss this in the trashcan for me? to British English
  test("Translate Can you toss this in the trashcan for me? to British English", () => {
    const text = "Can you toss this in the trashcan for me?";
    const translation = translator.translate(text, "american-to-british");
    assert.include(translation, "bin");
  });

  // 5. Translate The parking lot was full. to British English
  test("Translate The parking lot was full. to British English", () => {
    const text = "The parking lot was full.";
    const translation = translator.translate(text, "american-to-british");
    assert.include(translation, "car park");
  });

  // 6. Translate Like a high tech Rube Goldberg machine. to British English
  test("Translate Like a high tech Rube Goldberg machine. to British English", () => {
    const text = "Like a high tech Rube Goldberg machine.";
    const translation = translator.translate(text, "american-to-british");
    assert.include(translation, "Heath Robinson");
  });

  // 7. Translate To play hooky means to skip class or work. to British English
  test("Translate To play hooky means to skip class or work. to British English", () => {
    const text = "To play hooky means to skip class or work.";
    const translation = translator.translate(text, "american-to-british");
    assert.include(translation, "bunk off");
  });

  // 8. Translate No Mr. Bond, I expect you to die. to British English
  test("Translate No Mr. Bond, I expect you to die. to British English", () => {
    const text = "No Mr. Bond, I expect you to die.";
    const translation = translator.translate(text, "american-to-british");
    assert.include(translation, "Mr");
  });

  // 9. Translate Dr. Grosh will see you now. to British English
  test("Translate Dr. Grosh will see you now. to British English", () => {
    const text = "Dr. Grosh will see you now.";
    const translation = translator.translate(text, "american-to-british");
    assert.include(translation, "Dr");
  });

  // 10. Translate Lunch is at 12:15 today. to British English
  test("Translate Lunch is at 12:15 today. to British English", () => {
    const text = "Lunch is at 12:15 today.";
    const translation = translator.translate(text, "american-to-british");
    assert.include(translation, "12.15");
  });

  // 11. Translate We watched the footie match for a while. to American English
  test("Translate We watched the footie match for a while. to American English", () => {
    const text = "We watched the footie match for a while.";
    const translation = translator.translate(text, "british-to-american");
    assert.include(translation, "soccer");
  });

  // 12. Translate Paracetamol takes up to an hour to work. to American English
  test("Translate Paracetamol takes up to an hour to work. to American English", () => {
    const text = "Paracetamol takes up to an hour to work.";
    const translation = translator.translate(text, "british-to-american");
    assert.include(translation, "acetaminophen");
  });

  // 13. Translate First, caramelise the onions. to American English
  test("Translate First, caramelise the onions. to American English", () => {
    const text = "First, caramelise the onions.";
    const translation = translator.translate(text, "british-to-american");
    assert.include(translation, "caramelize");
  });

  // 14. Translate I spent the bank holiday at the funfair. to American English
  test("Translate I spent the bank holiday at the funfair. to American English", () => {
    const text = "I spent the bank holiday at the funfair.";
    const translation = translator.translate(text, "british-to-american");
    assert.include(translation, "public holiday");
    assert.include(translation, "carnival");
  });

  // 15. Translate I had a bicky then went to the chippy. to American English
  test("Translate I had a bicky then went to the chippy. to American English", () => {
    const text = "I had a bicky then went to the chippy.";
    const translation = translator.translate(text, "british-to-american");
    assert.include(translation, "cookie");
    assert.include(translation, "fish-and-chip shop");
  });

  // 16. Translate I've just got bits and bobs in my bum bag. to American English
  test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
    const text = "I've just got bits and bobs in my bum bag.";
    const translation = translator.translate(text, "british-to-american");
    assert.include(translation, "odds and ends");
    assert.include(translation, "fanny pack");
  });

  // 17. Translate The car boot sale at Boxted Airfield was called off. to American English
  test("Translate The car boot sale at Boxted Airfield was called off. to American English", () => {
    const text = "The car boot sale at Boxted Airfield was called off.";
    const translation = translator.translate(text, "british-to-american");
    assert.include(translation, "swap meet");
  });

  // 18. Translate Have you met Mrs Kalyani? to American English
  test("Translate Have you met Mrs Kalyani? to American English", () => {
    const text = "Have you met Mrs Kalyani?";
    const translation = translator.translate(text, "british-to-american");
    assert.include(translation, "Mrs.");
  });

  // 19. Translate Prof Joyner of King's College, London. to American English
  test("Translate Prof Joyner of King's College, London. to American English", () => {
    const text = "Prof Joyner of King's College, London.";
    const translation = translator.translate(text, "british-to-american");
    assert.include(translation, "Prof.");
  });

  // 20. Translate Tea time is usually around 4 or 4.30. to American English
  test("Translate Tea time is usually around 4 or 4.30. to American English", () => {
    const text = "Tea time is usually around 4 or 4.30.";
    const translation = translator.translate(text, "british-to-american");
    assert.include(translation, "4:30");
  });

  // 21. Highlight translation in Mangoes are my favorite fruit.
  test("Highlight translation in Mangoes are my favorite fruit.", () => {
    const text = "Mangoes are my favorite fruit.";
    const translation = translator.translate(text, "american-to-british");
    assert.include(translation, '<span class="highlight">favourite</span>');
  });

  // 22. Highlight translation in I ate yogurt for breakfast.
  test("Highlight translation in I ate yogurt for breakfast.", () => {
    const text = "I ate yogurt for breakfast.";
    const translation = translator.translate(text, "american-to-british");
    assert.include(translation, '<span class="highlight">yoghurt</span>');
  });

  // 23. Highlight translation in We watched the footie match for a while.
  test("Highlight translation in We watched the footie match for a while.", () => {
    const text = "We watched the footie match for a while.";
    const translation = translator.translate(text, "british-to-american");
    assert.include(translation, '<span class="highlight">soccer</span>');
  });

  // 24. Highlight translation in Paracetamol takes up to an hour to work.
  test("Highlight translation in Paracetamol takes up to an hour to work.", () => {
    const text = "Paracetamol takes up to an hour to work.";
    const translation = translator.translate(text, "british-to-american");
    assert.include(translation, '<span class="highlight">acetaminophen</span>');
  });

});
