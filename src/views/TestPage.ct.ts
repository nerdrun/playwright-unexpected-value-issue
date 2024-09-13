import { test, expect } from '@playwright/experimental-ct-vue';
import { type HooksConfig } from 'playwright';
import { type User } from '@/stores/store';
import TestPage from './TestPage.vue';

test.describe('<TestPage />', () => {
  test('Test User', async ({ mount }) => {
    const mockTestUser: User = {
      name: 'Jackson',
      age: 30,
      // toUserString: () => {
      //   return 'Hello';
      // },
    };
    const component = await mount<HooksConfig>(TestPage, {
      hooksConfig: { store: { user: mockTestUser } },
    });

    const name = component.getByTestId('name');
    await expect(name).toHaveText('Jackson');
  });
});
