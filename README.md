salesforce-to-types
=================

[![Version](https://img.shields.io/npm/v/salesforce-to-types.svg)](https://npmjs.org/package/salesforce-to-types)
[![CI](https://github.com/amphro/salesforce-to-types/workflows/CI/badge.svg)](https://github.com/amphro/salesforce-to-types/actions?query=workflow%3ACI)
[![Codecov](https://codecov.io/gh/amphro/salesforce-to-types/branch/master/graph/badge.svg)](https://codecov.io/gh/amphro/salesforce-to-types)
[![Downloads/week](https://img.shields.io/npm/dw/salesforce-to-types.svg)](https://npmjs.org/package/salesforce-to-types)
[![License](https://img.shields.io/npm/l/salesforce-to-types.svg)](https://github.com/amphro/salesforce-to-types/blob/master/package.json)

A Salesforce CLI plugin to generate typescript types for different Salesforce resources, like sobjects, using the APIs.

```sh-session
$ sfdx plugins:install salesforce-to-types
$ sfdx types:sobject:create -s Account
...
```

<!-- commands -->
* [`sfdx types:sobject:create -s <string> [-o <directory>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-typessobjectcreate--s-string--o-directory--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx types:sobject:create -s <string> [-o <directory>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Generates a typescript type for a Salesforce sobject!

```
USAGE
  $ sfdx types:sobject:create -s <string> [-o <directory>] [-u <string>] [--apiversion <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -o, --outputdir=outputdir                                                         [default: ./src/types] the output
                                                                                    directory to put the generated types

  -s, --sobject=sobject                                                             (required) the sobject to describe
                                                                                    and generate a type for

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLES
  $ sfdx types:sobject:create --sobject Account
  $ sfdx types:sobject:create --sobject MyCustomObject__c --directory types/ --targetusername myOrg@example.com
```

_See code: [src/commands/types/sobject/create.ts](https://github.com/amphro/salesforce-to-types/blob/v0.1.0/src/commands/types/sobject/create.ts)_
<!-- commandsstop -->
<!-- debugging-your-plugin -->
# Debugging your plugin
We recommend using the Visual Studio Code (VS Code) IDE for your plugin development. Included in the `.vscode` directory of this plugin is a `launch.json` config file, which allows you to attach a debugger to the node process when running your commands.

To debug the `hello:org` command: 
1. Start the inspector
  
If you linked your plugin to the sfdx cli, call your command with the `dev-suspend` switch: 
```sh-session
$ sfdx hello:org -u myOrg@example.com --dev-suspend
```
  
Alternatively, to call your command using the `bin/run` script, set the `NODE_OPTIONS` environment variable to `--inspect-brk` when starting the debugger:
```sh-session
$ NODE_OPTIONS=--inspect-brk bin/run hello:org -u myOrg@example.com
```

2. Set some breakpoints in your command code
3. Click on the Debug icon in the Activity Bar on the side of VS Code to open up the Debug view.
4. In the upper left hand corner of VS Code, verify that the "Attach to Remote" launch configuration has been chosen.
5. Hit the green play button to the left of the "Attach to Remote" launch configuration window. The debugger should now be suspended on the first line of the program. 
6. Hit the green play button at the top middle of VS Code (this play button will be to the right of the play button that you clicked in step #5).
<br><img src=".images/vscodeScreenshot.png" width="480" height="278"><br>
Congrats, you are debugging!
