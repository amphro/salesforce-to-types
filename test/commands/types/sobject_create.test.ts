import { core } from '@salesforce/command';
import { expect, test } from '@salesforce/command/lib/test';

describe('create types', () => {
  test
    .withOrg({ username: 'test@org.com' }, true)
    .withConnectionRequest(request => {
      return Promise.resolve({ fields: [{
        name: 'test',
        type: 'boolean'
      }] });
    })
    .stub(core.fs, 'writeFile', () => {})
    .stub(core.fs, 'readdir', () => ([]))
    .stdout().stderr()
    .command(['types:sobject:create', '-s', 'test', '--targetusername', 'test@org.com'])
    .it('types:sobject:create -s test --targetusername test@org.com', ctx => {
      expect(ctx.stderr).to.equal('');
      expect(ctx.stdout).to.contain('=== Create types');
    });

  test
    .withOrg({ username: 'test@org.com' }, true)
    .withConnectionRequest(request => {
      return Promise.resolve({ fields: [{
        name: 'test',
        type: 'boolean'
      }] });
    })
    .stub(core.fs, 'writeFile', () => {})
    .stub(core.fs, 'readdir', () => ([]))
    .stdout().stderr()
    .command(['types:sobject:create', '-s', 'myNamespace__my_className__c', '--targetusername', 'test@org.com'])
    .it('types:sobject:create -s myNamespace__my_className__c --targetusername test@org.com', ctx => {
      expect(ctx.stderr).to.equal('');
      expect(ctx.stdout).to.contain('=== Create types');
      expect(ctx.stdout).to.contain('MyNamespaceMyClassName');
      expect(ctx.stdout).to.contain('myNamespaceMyClassName');
    });
});
