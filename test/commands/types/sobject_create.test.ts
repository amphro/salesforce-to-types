import { core } from '@salesforce/command';
import { expect, test } from '@salesforce/command/dist/test';

describe('hello:org', () => {
  test
    .withOrg({ username: 'test@org.com' }, true)
    .withConnectionRequest(request => {
      return Promise.resolve({ fields: [{
        name: 'test',
        type: 'boolean'
      }] });
    })
    .stub(core.fs, 'writeFile', () => {})
    .stub(core.fs, 'readdir', () => {})
    .stdout().stderr()
    .command(['types:sobject:create', '-s', 'test', '--targetusername', 'test@org.com'])
    .it('types:sobject:create -s test --targetusername test@org.com', ctx => {
      expect(ctx.stderr).to.equal('');
      expect(ctx.stdout).to.contain('=== Create types');
    });
});
