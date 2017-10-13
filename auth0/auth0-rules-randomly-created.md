Sometimes when Auth0 is failing to authenticate the users.  It is because a rule has been added.  I'm not sure why these rules seem to be generating automatically.  Keller had a email whitelist domain get created, and as far as I can tell he didn't do anything intentionally to make it happen.

# Symptoms

You will redirect to Auth0 correctly, all the configuration will look like it's working. But all the login attempts will return unauthorized (or at least It will for any users not matching the rule) So if auth was working one day, and not the next. Check under the rules section 
