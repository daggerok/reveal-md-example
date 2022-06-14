import { Selector } from 'testcafe';

fixture`Reveal MD tests`
  .page`http://127.0.0.1:3000/`;

test('Should test presentation', async t => {
  const title = await Selector('h1').withText('TITLE');
  await t.expect(title.exists).ok();
  console.log(`found title: ${await title.innerText}`);

  const nextPageButton = await Selector('button.navigate-right.enabled.highlight');
  await t.expect(nextPageButton.exists).ok();
  await t.click(nextPageButton);

  const lists = await Selector('h2').withText('LISTS');
  await t.expect(lists.exists).ok();
  console.log(`found lists: ${await lists.innerText}`);

  const li1 = Selector('li').withText('Point 1');
  await t.expect(li1.exists).ok();
  console.log(`found 1st list item: ${await li1.innerText}`);

  const li2 = Selector('li').withText('Point 2');
  await t.expect(li2.exists).ok();
  console.log(`found 2nd list item: ${await li1.innerText}`);
});
