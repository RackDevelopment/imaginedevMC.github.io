Repository: https://github.com/imaginedevMC/ImagineConfiguration
# About
This is a simple and lightweight python module for handling small config files.
# Usage
## Creating an instance of ImagineConfiguration
```py
from imagine import ImagineConfiguration, InterpreterError
config = ImageConfiguration('config.ic')
try: 
    config.load()
except InterpreterError as error:
    error.throw() # Prints where the issue went wrong and exits the program
```
## Methods
```py
config.load() # Loads config values into memory
value = config.get('my-key') # Get a value from a key
config.set('user-input', input('What do you want to save to the config?'))
config.save() # Save values to config file
```
***
# Speed Tests
1. Load, read and print: `<1ms`
2. Write and save: `<1ms`
