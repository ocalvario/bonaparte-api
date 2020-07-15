# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Battle.create(name: "Battle of Lübeck", year: 1806, country: "Germany", troops: 35000, casualties: 1500, description: "The French inflicted a severe defeat on the Prussians, driving them from the neutral city.")

Battle.create(name: "Battle of Leipzig", year: 1813, country: "Germany", troops: 177000, casualties: 73000, description: "Decisively defeated again, Napoleon was compelled to return to France while the Sixth Coalition kept up its momentum, dissolving the Confederation of the Rhine and invading France early the next year.")

Battle.create(name: "Battle of Borodino", year: 1812, country: "Russia", troops: 160000, casualties: 45000, description: "Napoleon captures Moscow but it is only a short term victory")

Battle.create(name: "Battle of Ligny", year: 1815, country: "Netherlands", troops: 84000, casualties: 12000, description: " The battle resulted in a tactical victory for the French, but the bulk of the Prussian army survived the battle in good order and played a pivotal role two days later at the Battle of Waterloo.")