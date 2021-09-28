# Logger

## 2 Parts

- Logger Server
- Logger Client

# Logger Client
The Logger Client sits on the application side.
Function/Modules call Logger with a message

## Installing

### package.json
Create a section in your package.json names logger and add the following settings:
```json
{
    "logger": {
        "api": "https://mylogger.mycompany.com",
        "key": "<your secret key for Logger>"
    }
}
```

#### api
This is the endpoint where the Logger-Server resides
#### key
This is the key Logger-Client send with each message to the Logger-Server.


### Client Logger routine
The directory 'client' holds the Logger-Client software for NodeJS.

It's quite simple and you can easily port it to other languages.


## Using
### Instatiating
You instantiate a logger for a Function/Module with calling a Class
```javascript
const l = new Logger('<source>');
```

The source can be the name of the Module

This source string will be added to the message going to
the Logger-Server under the name 'source'

### Methods
#### addMeta
Sometimes you need to add metadata to messages
which are static for the whole application, regardless of
the function which called Logger.

Think of a logged in Username. If somebody logs in,
then you can put the username in 'meta' and pass it on to Logger.

The meta-message is of a key/value pair.

The meta-information will be added to each message from your
application to the Logger-Server.

#### addSource
Sometimes, in a function, you want to extend the source-string
for the remainder of this module (Logger-instance)

You do this by calling addSource and the name of the added
source-string. It will be concatenated to the source-string
which was passed at instantiating, separated by a colon.

#### log, debug, info, silly, warn, fatal, error
Send a Log Message with this severity

### timestamp
The time of the log message will be decided on the Logger-Server.

The UTC time is taken.


## Logger Server
The Logger Server is a API-Endpoint somewhere.

**TODO : More explanation to do**


