# Rooted conservation app — prompt and chat history

This file preserves the project's original request, follow-up feature request, and the assistant's responses from the conversation that created and extended the prototype.

## Original prompt

> #new
>
> Problem:
> We want to help the keystone species to save the environment by creating an app - the problem is that the keystone species population is going down and if they go extinct then the entire eco system will also get affected
> Also, another problem is that native species of plants is declining and replaced by invasive ones
>
> What we need:
>
> we also need to capture information on native species of plants based on the location and animal keystone species
>
> So, I want to create an app that tracks your gps location and uses the location
>
> to find the keystone species in your area
> the most endangered keystone species will be at the top and you will also get to see more information about the keystone species
>
> the app will have information about seeds for native species of plants based on location and it will also provide information on how to grow and take care of it. possibly integrate with weather app to find out favorable weather to plant.
>
> we can also add a scanner to help our user identify the species of plant
>
> you'll also get to report, which means you can send a report if you see someone poaching or hurting the habitat
> you can place a report by filling out details about the keystone species, what is happening and submit it to database
> using the amount of reports that are in the database, your app can make news like "people are poaching these species too much, and hurting the environment"
>
> app will contain features such as quizzes and questions that would help the user build points for rewards

## Assistant response — initial prototype

Created a responsive, no-build web MVP with regional wildlife profiles, native-plant growing guides, GPS-assisted location and weather, a photo-preview field guide, local field reports, and a points quiz.

The assistant noted that the entries were sample data; reports and points were saved in the browser rather than a database; the plant scanner did not identify plants; and forecasts required permission and an internet connection.

## Follow-up prompt

> What if people put fake reports
> can we leverage AI to scan through all reports and identify legit vs fake reports
>
> add/update/delete keystone species
> add/update/delete native species of plants
> the location needs to be more accurate to the town or city
> add severity of the problem on field report to prioritize the issue
>
> we should be able to add where user can get free seeds, based on their location and what is nearby
> they could use their points from the app to get the free seeds
> levels and good names for those level like (explorer, etc.) based on points
> this app should allow people to donate seeds as well to our setup pickup points
> possible take donations from users for the upkeep of the app
> for keystone species - can we add pictures of those animals, same with native species of plants
> for keystone species and native species - people can report sightings for awareness, they can provide information about how to keep distance, ask questions, etc.
> we can also provide information about the population of the keystone species and native plant species
> information of plants and what the favorable weather is like winter plants, summer plants etc.
>
> can you make these changes

## Assistant response — follow-up changes

Implemented species and plant add/edit/delete; photo upload or HTTPS image links; town-level location search and GPS lookup; severity-prioritized reports; community sightings and questions; seasonal plant guidance; seed pickup examples and local seed offers; named point levels and quiz rewards; and a simulated seed-packet redemption.

For report screening, the prototype flags simple spam-like patterns and possible duplicates for human review. It does **not** use AI to decide whether a report is true or fake. Automated signals are not proof, and reports are not automatically labeled genuine or fraudulent.

## Prototype and service limitations

- The app is a browser-only prototype. Reports, guide edits, posts, seed offers, and points are stored on the current device; they are not shared with a database or other users.
- Species, plants, population notes, and pickup locations are sample/demo content. Nearby pickup hosts and stock are not verified.
- Seed-point redemption is simulated: it does not reserve or ship seeds.
- Donations and payment processing are not enabled.
- Real AI-assisted moderation, verified population data and seed listings, shared accounts/data, and payment processing require suitable backend services, trustworthy data sources, and human oversight.

## Workspace setup note

The first proposed workspace path, `C:\Users\you\source\repos\conservation-appv2`, did not exist. The project was subsequently opened at the existing `C:\Users\tejas\conservation-appv2` workspace and the work continued there.
