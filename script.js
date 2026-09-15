const questions = [
	{ topic: 'Arithmetic', question: 'What is 15% of 200?', options: ['15', '20', '30', '35'], answer: 2 },
	{ topic: 'Arithmetic', question: 'What is the result of 7 x 8?', options: ['48', '54', '56', '64'], answer: 2 },
	{ topic: 'Arithmetic', question: 'Which fraction is equivalent to 3/4?', options: ['6/12', '9/12', '12/20', '15/24'], answer: 1 },
	{ topic: 'Arithmetic', question: 'What is 144 divided by 12?', options: ['10', '11', '12', '14'], answer: 2 },
	{ topic: 'Arithmetic', question: 'What is the smallest prime number?', options: ['0', '1', '2', '3'], answer: 2 },
	{ topic: 'Arithmetic', question: 'What is 2.5 + 3.75?', options: ['5.25', '6.25', '6.75', '7.25'], answer: 1 },
	{ topic: 'Arithmetic', question: 'Round 8,649 to the nearest hundred.', options: ['8,600', '8,640', '8,650', '8,700'], answer: 3 },
	{ topic: 'Arithmetic', question: 'What is the greatest common factor of 18 and 24?', options: ['3', '6', '9', '12'], answer: 1 },
	{ topic: 'Arithmetic', question: 'What is 5 squared?', options: ['10', '15', '20', '25'], answer: 3 },
	{ topic: 'Arithmetic', question: 'A $40 shirt is discounted by 25%. What is the sale price?', options: ['$10', '$25', '$30', '$35'], answer: 2 },
    { topic: 'Algebra', question: 'Solve for x: 2x + 5 = 15.', options: ['4', '5', '6', '7'], answer: 0 },
	{ topic: 'Algebra', question: 'Solve for x: x + 9 = 17.', options: ['6', '7', '8', '9'], answer: 2 },
	{ topic: 'Algebra', question: 'Solve for x: 3x = 27.', options: ['6', '8', '9', '12'], answer: 2 },
    { topic: 'Algebra', question: 'If 5x = 20, what is x?', options: ['2', '3', '4', '5'], answer: 2 },
	{ topic: 'Algebra', question: 'Simplify: 4a + 3a - 2.', options: ['7a - 2', '7a + 2', 'a - 2', '12a'], answer: 0 },
	{ topic: 'Algebra', question: 'If y = 2x + 1, what is y when x = 4?', options: ['7', '8', '9', '10'], answer: 2 },
	{ topic: 'Algebra', question: 'Which expression is equal to 2(x + 5)?', options: ['2x + 5', '2x + 10', 'x + 10', '2x + 25'], answer: 1 },
	{ topic: 'Algebra', question: 'Solve for x: 2x - 6 = 10.', options: ['2', '4', '8', '16'], answer: 2 },
	{ topic: 'Algebra', question: 'What is the slope of y = 5x - 3?', options: ['-3', '3', '5', '8'], answer: 2 },
	{ topic: 'Algebra', question: 'What is the value of 3x + 2 when x = -2?', options: ['-8', '-4', '4', '8'], answer: 1 },
	{ topic: 'Algebra', question: 'Factor: x^2 + 5x.', options: ['x(x + 5)', '5x(x + 1)', '(x + 5)^2', 'x^2(1 + 5)'], answer: 0 },
	{ topic: 'Algebra', question: 'If 5 pencils cost $10, how much does one pencil cost?', options: ['$0.50', '$1', '$2', '$5'], answer: 2 },
	{ topic: 'Geometry', question: 'How many degrees are in a right angle?', options: ['45', '90', '180', '360'], answer: 1 },
	{ topic: 'Geometry', question: 'What is the perimeter of a square with side length 6 cm?', options: ['12 cm', '18 cm', '24 cm', '36 cm'], answer: 2 },
	{ topic: 'Geometry', question: 'What is the area of a rectangle 8 m long and 3 m wide?', options: ['11 m2', '22 m2', '24 m2', '48 m2'], answer: 2 },
	{ topic: 'Geometry', question: 'How many sides does a hexagon have?', options: ['5', '6', '7', '8'], answer: 1 },
	{ topic: 'Geometry', question: 'What is the sum of the angles in a triangle?', options: ['90 degrees', '180 degrees', '270 degrees', '360 degrees'], answer: 1 },
	{ topic: 'Geometry', question: 'What is the diameter of a circle with radius 7 cm?', options: ['3.5 cm', '7 cm', '14 cm', '49 cm'], answer: 2 },
	{ topic: 'Geometry', question: 'What is the area of a triangle with base 10 and height 4?', options: ['14', '20', '40', '80'], answer: 1 },
	{ topic: 'Geometry', question: 'A cube has how many faces?', options: ['4', '6', '8', '12'], answer: 1 },
	{ topic: 'Geometry', question: 'What type of triangle has three equal sides?', options: ['Scalene', 'Isosceles', 'Equilateral', 'Right'], answer: 2 },
	{ topic: 'Geometry', question: 'How many lines of symmetry does a square have?', options: ['1', '2', '3', '4'], answer: 3 },
	{ topic: 'Measurement', question: 'How many centimeters are in one meter?', options: ['10', '50', '100', '1,000'], answer: 2 },
	{ topic: 'Measurement', question: 'How many minutes are in 2.5 hours?', options: ['120', '135', '150', '180'], answer: 2 },
	{ topic: 'Measurement', question: 'What is 3 liters in milliliters?', options: ['30 ml', '300 ml', '3,000 ml', '30,000 ml'], answer: 2 },
	{ topic: 'Measurement', question: 'A race is 5 kilometers long. How many meters is that?', options: ['50', '500', '5,000', '50,000'], answer: 2 },
	{ topic: 'Measurement', question: 'What is the approximate value of pi?', options: ['2.14', '3.14', '4.13', '6.28'], answer: 1 },
	{ topic: 'Measurement', question: 'How many grams are in a kilogram?', options: ['10', '100', '1,000', '10,000'], answer: 2 },
	{ topic: 'Measurement', question: 'What is 72 degrees Fahrenheit in Celsius, approximately?', options: ['12 C', '22 C', '32 C', '42 C'], answer: 1 },
	{ topic: 'Measurement', question: 'A car travels 120 miles in 2 hours. What is its average speed?', options: ['50 mph', '60 mph', '80 mph', '240 mph'], answer: 1 },
	{ topic: 'Measurement', question: 'How many square feet are in a 10 ft by 10 ft room?', options: ['20', '40', '100', '200'], answer: 2 },
	{ topic: 'Measurement', question: 'What is the volume of a box 2 cm by 3 cm by 4 cm?', options: ['9 cm3', '12 cm3', '24 cm3', '48 cm3'], answer: 2 },
	{ topic: 'Data', question: 'What is the mean of 4, 6, and 8?', options: ['5', '6', '7', '18'], answer: 1 },
	{ topic: 'Data', question: 'What is the median of 3, 9, 5, 1, and 7?', options: ['3', '5', '7', '9'], answer: 1 },
	{ topic: 'Data', question: 'What is the mode of 2, 3, 3, 4, and 5?', options: ['2', '3', '4', '5'], answer: 1 },
	{ topic: 'Data', question: 'A fair coin is flipped once. What is the probability of heads?', options: ['0', '1/4', '1/2', '1'], answer: 2 },
	{ topic: 'Data', question: 'A bag has 3 red and 1 blue marble. What is the chance of blue?', options: ['1/2', '1/3', '1/4', '3/4'], answer: 2 },
	{ topic: 'Logic', question: 'If all squares are rectangles, which statement must be true?', options: ['All rectangles are squares', 'Some squares are rectangles', 'No squares are rectangles', 'Squares have three sides'], answer: 1 },
	{ topic: 'Logic', question: 'What is the next number: 1, 4, 9, 16, ...?', options: ['20', '24', '25', '36'], answer: 2 },
	{ topic: 'Logic', question: 'If today is Monday, what day will it be in 10 days?', options: ['Wednesday', 'Thursday', 'Friday', 'Sunday'], answer: 1 },
	{ topic: 'Logic', question: 'A dozen eggs costs $3. How much do 4 eggs cost?', options: ['$0.50', '$1', '$1.50', '$2'], answer: 1 },
	{ topic: 'Logic', question: 'Which number is divisible by both 3 and 5?', options: ['14', '20', '30', '44'], answer: 2 }
];

questions.forEach((question) => { question.subject = 'Mathematics'; });
questions.push(
	{ subject: 'Science', topic: 'Biology', question: 'Which part of a plant absorbs water from the soil?', options: ['Flower', 'Root', 'Leaf', 'Fruit'], answer: 1 },
	{ subject: 'Science', topic: 'Biology', question: 'What gas do humans need to breathe?', options: ['Carbon dioxide', 'Nitrogen', 'Oxygen', 'Hydrogen'], answer: 2 },
    { subject: 'Science', topic: 'Biology', question: 'What is the process by which plants make their own food?', options: ['Respiration', 'Photosynthesis', 'Digestion', 'Transpiration'], answer: 1 },
    { subject: 'Science', topic: 'Biology', question: 'What is the largest organ in the human body?', options: ['Heart', 'Liver', 'Skin', 'Lungs'], answer: 2 },
    
	{ subject: 'Science', topic: 'Physics', question: 'What force pulls objects toward Earth?', options: ['Friction', 'Gravity', 'Magnetism', 'Tension'], answer: 1 },
	{ subject: 'Science', topic: 'Physics', question: 'What is the unit of electrical current?', options: ['Volt', 'Watt', 'Ampere', 'Ohm'], answer: 2 },
	{ subject: 'Science', topic: 'Chemistry', question: 'What is the chemical symbol for water?', options: ['CO2', 'H2O', 'O2', 'NaCl'], answer: 1 },
	{ subject: 'English', topic: 'Grammar', question: 'Which word is an adjective in “The bright sun shines”?', options: ['The', 'bright', 'sun', 'shines'], answer: 1 },
	{ subject: 'English', topic: 'Grammar', question: 'What is the past tense of “go”?', options: ['Goed', 'Gone', 'Went', 'Going'], answer: 2 },
	{ subject: 'English', topic: 'Vocabulary', question: 'Which word is closest in meaning to “rapid”?', options: ['Slow', 'Careful', 'Quick', 'Quiet'], answer: 2 },
	{ subject: 'English', topic: 'Vocabulary', question: 'What is the opposite of “ancient”?', options: ['Old', 'Modern', 'Historic', 'Early'], answer: 1 },
	{ subject: 'English', topic: 'Literature', question: 'Who tells the story in a first-person narrative?', options: ['The author only', 'A character using “I”', 'The setting', 'The reader'], answer: 1 },
	{ subject: 'History', topic: 'World History', question: 'Which ancient civilization built the pyramids at Giza?', options: ['Roman', 'Egyptian', 'Maya', 'Viking'], answer: 1 },
	{ subject: 'History', topic: 'World History', question: 'The Renaissance began in which country?', options: ['Italy', 'France', 'China', 'Brazil'], answer: 0 },
	{ subject: 'History', topic: 'Civics', question: 'What is a constitution?', options: ['A tax bill', 'A set of fundamental laws', 'A court case', 'A campaign speech'], answer: 1 },
	{ subject: 'History', topic: 'Civics', question: 'What is the main purpose of voting?', options: ['To choose representatives', 'To pay taxes', 'To write laws alone', 'To join a club'], answer: 0 },
	{ subject: 'History', topic: 'World History', question: 'Which invention is associated with Johannes Gutenberg?', options: ['Steam engine', 'Printing press', 'Telephone', 'Compass'], answer: 1 },
	{ subject: 'Geography', topic: 'Maps', question: 'What does a map scale show?', options: ['Map colors', 'Distance on the map compared with real distance', 'The weather', 'Population only'], answer: 1 },
	{ subject: 'Geography', topic: 'Earth', question: 'What is the largest ocean on Earth?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], answer: 3 },
	{ subject: 'Geography', topic: 'Earth', question: 'What is the layer of gases around Earth called?', options: ['Lithosphere', 'Atmosphere', 'Hydrosphere', 'Biosphere'], answer: 1 },
	{ subject: 'Geography', topic: 'Maps', question: 'Lines of latitude run in which direction?', options: ['East to west', 'North to south', 'Only diagonally', 'In circles around the poles'], answer: 0 },
	{ subject: 'Geography', topic: 'Earth', question: 'What is molten rock below Earth’s surface called?', options: ['Lava', 'Magma', 'Granite', 'Clay'], answer: 1 },
	{ subject: 'Computing', topic: 'Programming', question: 'What is an algorithm?', options: ['A computer screen', 'A step-by-step method for solving a problem', 'A type of cable', 'A password'], answer: 1 },
	{ subject: 'Computing', topic: 'Programming', question: 'What does HTML mainly structure?', options: ['Web pages', 'Electric circuits', 'Databases only', 'Image pixels'], answer: 0 },
	{ subject: 'Computing', topic: 'Digital Literacy', question: 'What makes a password stronger?', options: ['Using your name', 'Using only numbers', 'Using a long mix of characters', 'Sharing it with friends'], answer: 2 },
	{ subject: 'Computing', topic: 'Digital Literacy', question: 'What is phishing?', options: ['A video game', 'A fraudulent attempt to steal information', 'A file format', 'A search engine'], answer: 1 },
	{ subject: 'Computing', topic: 'Programming', question: 'What does a loop do in a program?', options: ['Repeats instructions', 'Deletes the program', 'Changes the monitor', 'Prints paper'], answer: 0 }
	,
	{ subject: 'Art', topic: 'Drawing', question: 'What is the term for a quick, loose drawing used to plan an artwork?', options: ['Sketch', 'Portrait', 'Mosaic', 'Collage'], answer: 0 },
	{ subject: 'Art', topic: 'Color Theory', question: 'Which two colors are primary colors?', options: ['Green and orange', 'Red and blue', 'Purple and green', 'Orange and violet'], answer: 1 },
	{ subject: 'Art', topic: 'Design', question: 'What principle describes how visual weight is arranged in an artwork?', options: ['Balance', 'Texture', 'Scale', 'Pattern'], answer: 0 },
	{ subject: 'Art', topic: 'Art History', question: 'Which artist painted the Mona Lisa?', options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'], answer: 1 },
	{ subject: 'Art', topic: 'Design', question: 'What is negative space?', options: ['The darkest color', 'The empty area around or between subjects', 'A broken pencil', 'A type of sculpture'], answer: 1 },
	{ subject: 'Art', topic: 'Color Theory', question: 'What happens when complementary colors are placed side by side?', options: ['They appear more intense', 'They become transparent', 'They always turn black', 'They lose all contrast'], answer: 0 },
	{ subject: 'Music', topic: 'Theory', question: 'How many beats does a whole note usually receive in common time?', options: ['1', '2', '3', '4'], answer: 3 },
	{ subject: 'Music', topic: 'Instruments', question: 'Which instrument usually has 88 keys?', options: ['Violin', 'Piano', 'Flute', 'Trumpet'], answer: 1 },
	{ subject: 'Music', topic: 'Theory', question: 'What does tempo describe?', options: ['The speed of music', 'The loudness of music', 'The instrument used', 'The song title'], answer: 0 },
	{ subject: 'Health', topic: 'Wellness', question: 'Which nutrient is the body’s main source of energy?', options: ['Carbohydrates', 'Vitamins', 'Water', 'Minerals'], answer: 0 },
	{ subject: 'Health', topic: 'Human Body', question: 'Which organ pumps blood around the body?', options: ['Lung', 'Brain', 'Heart', 'Kidney'], answer: 2 },
	{ subject: 'Health', topic: 'Wellness', question: 'Which habit best supports healthy sleep?', options: ['A regular bedtime', 'Bright screens all night', 'Skipping rest', 'Drinking energy drinks late'], answer: 0 },
	{ subject: 'Environmental Studies', topic: 'Ecology', question: 'What is an ecosystem?', options: ['A single animal', 'Living things and their environment', 'A weather forecast', 'A type of rock'], answer: 1 },
	{ subject: 'Environmental Studies', topic: 'Sustainability', question: 'Which energy source is renewable?', options: ['Coal', 'Oil', 'Solar power', 'Natural gas'], answer: 2 },
	{ subject: 'Environmental Studies', topic: 'Ecology', question: 'What do plants release during photosynthesis?', options: ['Oxygen', 'Plastic', 'Salt', 'Smoke'], answer: 0 },
	{ subject: 'Economics', topic: 'Money', question: 'What is a budget used for?', options: ['Planning income and spending', 'Measuring temperature', 'Drawing maps', 'Naming products'], answer: 0 },
	{ subject: 'Economics', topic: 'Trade', question: 'What is a consumer?', options: ['A person who buys or uses goods', 'A factory machine', 'A government building', 'A natural resource'], answer: 0 },
	{ subject: 'Economics', topic: 'Money', question: 'What usually happens when demand increases while supply stays low?', options: ['Prices may rise', 'Prices always reach zero', 'Goods disappear from records', 'Demand stops immediately'], answer: 0 },
	{ subject: 'Business', topic: 'Enterprise', question: 'What is an entrepreneur?', options: ['Someone who starts and manages a business', 'A type of accountant only', 'A sports referee', 'A weather scientist'], answer: 0 },
	{ subject: 'Business', topic: 'Marketing', question: 'What is the purpose of advertising?', options: ['To inform and persuade customers', 'To repair machines', 'To calculate rainfall', 'To translate books'], answer: 0 },
	{ subject: 'Business', topic: 'Finance', question: 'What is profit?', options: ['Revenue minus costs', 'Costs plus debt', 'Money borrowed from a bank', 'The number of employees'], answer: 0 },
	{ subject: 'Physical Education', topic: 'Fitness', question: 'Which activity mainly improves cardiovascular endurance?', options: ['Long-distance running', 'Silent reading', 'Stretching one finger', 'Drawing'], answer: 0 },
	{ subject: 'Physical Education', topic: 'Sports', question: 'How many players from one soccer team are normally on the field?', options: ['5', '7', '9', '11'], answer: 3 },
	{ subject: 'Physical Education', topic: 'Wellness', question: 'Why is warming up before exercise useful?', options: ['It prepares the body for movement', 'It replaces water', 'It guarantees no mistakes', 'It lowers all body movement'], answer: 0 }
);

questions.push(
	{ subject: 'Mathematics', topic: 'Calculus', difficulty: 'Advanced', question: 'What is the derivative of f(x) = x^3 - 4x?', options: ['3x^2 - 4', 'x^2 - 4', '3x - 4', 'x^3 - 4'], answer: 0 },
	{ subject: 'Mathematics', topic: 'Algebra', difficulty: 'Advanced', question: 'What are the roots of x^2 - 5x + 6 = 0?', options: ['1 and 6', '2 and 3', '-2 and -3', '3 and 6'], answer: 1 },
	{ subject: 'Mathematics', topic: 'Probability', difficulty: 'Advanced', question: 'What is the probability of getting two heads when tossing a fair coin twice?', options: ['1/2', '1/3', '1/4', '3/4'], answer: 2 },
	{ subject: 'Science', topic: 'Physics', difficulty: 'Advanced', question: 'According to Newton’s second law, force equals:', options: ['Mass divided by acceleration', 'Mass times acceleration', 'Acceleration divided by mass', 'Mass plus acceleration'], answer: 1 },
	{ subject: 'Science', topic: 'Chemistry', difficulty: 'Advanced', question: 'What does a catalyst do in a chemical reaction?', options: ['Raises the product mass', 'Lowers activation energy', 'Becomes the final product', 'Stops all collisions'], answer: 1 },
	{ subject: 'Science', topic: 'Biology', difficulty: 'Advanced', question: 'What is the role of messenger RNA?', options: ['Carries genetic instructions to ribosomes', 'Stores fat in cells', 'Breaks down oxygen', 'Builds cell walls'], answer: 0 },
	{ subject: 'Computing', topic: 'Algorithms', difficulty: 'Advanced', question: 'What is the average time complexity of binary search on a sorted list?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'], answer: 1 },
	{ subject: 'Computing', topic: 'Networks', difficulty: 'Advanced', question: 'What does HTTPS add to HTTP?', options: ['Image compression', 'Encryption and authentication', 'More screen resolution', 'Offline storage only'], answer: 1 },
	{ subject: 'English', topic: 'Literature', difficulty: 'Advanced', question: 'What is dramatic irony?', options: ['The audience knows something a character does not', 'A poem has no rhythm', 'A story has multiple authors', 'A character speaks only in rhyme'], answer: 0 },
	{ subject: 'English', topic: 'Grammar', difficulty: 'Advanced', question: 'Which sentence uses the subjunctive mood correctly?', options: ['If I were you, I would revise.', 'If I was you, I revise.', 'If I am you, I revised.', 'If I be you, I revises.'], answer: 0 },
	{ subject: 'Economics', topic: 'Markets', difficulty: 'Advanced', question: 'What does price elasticity of demand measure?', options: ['Response of quantity demanded to a price change', 'Total national income', 'The cost of production only', 'The number of market sellers'], answer: 0 },
	{ subject: 'Business', topic: 'Finance', difficulty: 'Advanced', question: 'What does a balance sheet report?', options: ['Assets, liabilities, and equity', 'Only daily sales', 'Customer opinions', 'Employee attendance'], answer: 0 },
	{ subject: 'Art', topic: 'Perspective', difficulty: 'Advanced', question: 'In one-point perspective, receding parallel lines appear to meet at the:', options: ['Color wheel', 'Vanishing point', 'Horizon brush', 'Contour edge'], answer: 1 },
	{ subject: 'Music', topic: 'Theory', difficulty: 'Advanced', question: 'What is a triad in music theory?', options: ['A three-note chord', 'Three repeated lyrics', 'A three-minute song', 'Three instruments playing randomly'], answer: 0 },
	{ subject: 'Environmental Studies', topic: 'Climate Science', difficulty: 'Advanced', question: 'What is a major cause of the enhanced greenhouse effect?', options: ['Increased greenhouse gases from human activity', 'Less sunlight reaching Earth', 'More ocean tides', 'Daily changes in wind direction'], answer: 0 },
	{ subject: 'Geography', topic: 'Earth Systems', difficulty: 'Advanced', question: 'What drives most plate tectonic movement?', options: ['Convection within Earth’s mantle', 'Moonlight', 'Ocean waves alone', 'Cloud formation'], answer: 0 },
	{ subject: 'Health', topic: 'Human Body', difficulty: 'Advanced', question: 'What is homeostasis?', options: ['Maintaining stable internal conditions', 'Increasing body temperature without limit', 'Digesting only carbohydrates', 'Building skeletal muscle instantly'], answer: 0 },
	{ subject: 'Physical Education', topic: 'Sports Science', difficulty: 'Advanced', question: 'What does VO2 max estimate?', options: ['Maximum oxygen use during intense exercise', 'Maximum bone length', 'Resting body temperature', 'Reaction time in a sprint'], answer: 0 }
);

questions.push(
	{ subject: 'Mathematics', topic: 'Trigonometry', question: 'In a right triangle, what does sin(theta) equal?', options: ['Adjacent over hypotenuse', 'Opposite over hypotenuse', 'Opposite over adjacent', 'Hypotenuse over opposite'], answer: 1 },
	{ subject: 'Mathematics', topic: 'Sequences', question: 'What is the next term in the arithmetic sequence 5, 9, 13, 17?', options: ['20', '21', '22', '24'], answer: 1 },
	{ subject: 'Science', topic: 'Earth Science', question: 'What instrument measures earthquakes?', options: ['Thermometer', 'Seismograph', 'Barometer', 'Anemometer'], answer: 1 },
	{ subject: 'Science', topic: 'Space', question: 'What is the name of our galaxy?', options: ['Andromeda', 'Milky Way', 'Whirlpool', 'Sombrero'], answer: 1 },
	{ subject: 'English', topic: 'Writing', question: 'What is a thesis statement?', options: ['The central claim of an essay', 'The final punctuation mark', 'A list of page numbers', 'A character description'], answer: 0 },
	{ subject: 'English', topic: 'Rhetoric', question: 'Which appeal uses evidence and reasoning?', options: ['Ethos', 'Pathos', 'Logos', 'Irony'], answer: 2 },
	{ subject: 'History', topic: 'Ancient Civilizations', question: 'Which writing system was used in ancient Mesopotamia?', options: ['Cuneiform', 'Hieroglyphics only', 'Latin', 'Morse code'], answer: 0 },
	{ subject: 'History', topic: 'Modern History', question: 'What event began in 1789 in France?', options: ['The Industrial Revolution', 'The French Revolution', 'The Renaissance', 'The Space Race'], answer: 1 },
	{ subject: 'Geography', topic: 'Population', question: 'What does population density measure?', options: ['People per unit of area', 'Rainfall per year', 'Mountain height', 'River speed'], answer: 0 },
	{ subject: 'Geography', topic: 'Climate', question: 'Which climate zone is found near the Equator?', options: ['Polar', 'Tropical', 'Tundra', 'Arctic'], answer: 1 },
	{ subject: 'Computing', topic: 'Data', question: 'What is a database used to do?', options: ['Organize and retrieve data', 'Create electricity', 'Measure sound', 'Paint walls'], answer: 0 },
	{ subject: 'Computing', topic: 'Cybersecurity', question: 'What is two-factor authentication?', options: ['Two passwords shared publicly', 'Two forms of identity verification', 'Two copies of a file', 'Two web browsers'], answer: 1 },
	{ subject: 'Art', topic: 'Sculpture', question: 'What is a sculpture?', options: ['A three-dimensional artwork', 'A type of melody', 'A written argument', 'A flat map'], answer: 0 },
	{ subject: 'Art', topic: 'Photography', question: 'What does exposure control in photography?', options: ['The amount of light captured', 'The story title', 'The canvas size only', 'The paint texture'], answer: 0 },
	{ subject: 'Music', topic: 'Performance', question: 'What does a conductor lead?', options: ['An orchestra or ensemble', 'A painting class', 'A football team only', 'A science experiment'], answer: 0 },
	{ subject: 'Music', topic: 'Composition', question: 'What is melody?', options: ['A sequence of musical notes forming a tune', 'The loudness of a song', 'The speed of a song', 'The silence between concerts'], answer: 0 },
	{ subject: 'Health', topic: 'Nutrition', question: 'What does a balanced diet provide?', options: ['A variety of needed nutrients', 'Only sugar', 'No water', 'Only protein'], answer: 0 },
	{ subject: 'Health', topic: 'Mental Health', question: 'Which is a healthy way to manage stress?', options: ['Regular physical activity', 'Avoiding all sleep', 'Ignoring every feeling', 'Using unsafe substances'], answer: 0 },
	{ subject: 'Environmental Studies', topic: 'Conservation', question: 'What does recycling help reduce?', options: ['Waste sent to landfills', 'The need for sunlight', 'The number of trees', 'The size of oceans'], answer: 0 },
	{subject:'Environmental Studies', topic: 'Resources', question: 'What is a major contributor to global warming?', options: ['Deforestation', 'Rainfall', 'Volcanoes only', 'Wind patterns'], answer: 0 },
	{ subject: 'Environmental Studies', topic: 'Resources', question: 'Which resource is non-renewable?', options: ['Wind', 'Sunlight', 'Coal', 'Moving water'], answer: 2 },

	{ subject: 'Economics', topic: 'Scarcity', question: 'What is scarcity?', options: ['Limited resources and unlimited wants', 'Unlimited goods for everyone', 'A fall in rainfall', 'A type of currency'], answer: 0 },
	{ subject: 'Economics', topic: 'Government', question: 'What is tax revenue commonly used to fund?', options: ['Public services', 'Private passwords', 'Weather patterns', 'Musical scales'], answer: 0 },
	{ subject: 'Business', topic: 'Operations', question: 'What does production transform into products?', options: ['Inputs and resources', 'Customer complaints', 'Company logos', 'Interest rates only'], answer: 0 },
	{ subject: 'Business', topic: 'Leadership', question: 'What is delegation?', options: ['Assigning tasks and responsibility to others', 'Removing every deadline', 'Selling a company', 'Copying a logo'], answer: 0 },
	{ subject: 'Physical Education', topic: 'Training', question: 'What is flexibility?', options: ['The range of movement at a joint', 'The maximum heart rate only', 'The number of team players', 'The speed of a ball'], answer: 0 },
	{ subject: 'Physical Education', topic: 'Safety', question: 'Why should athletes stay hydrated?', options: ['To support body functions during activity', 'To make bones invisible', 'To eliminate warm-ups', 'To avoid learning technique'], answer: 0 }
);

questions.push(
	{ subject: 'Mathematics', topic: 'Number Bases', question: 'What is the decimal value of the binary number 101?', options: ['3', '4', '5', '6'], answer: 2 },
	{ subject: 'Mathematics', topic: 'Number Bases', question: 'What is the hexadecimal representation of decimal 15?', options: ['A', 'B', 'C', 'F'], answer: 3 },
	{ subject: 'Mathematics', topic: 'Number Bases', question: 'Convert the octal number 17 to decimal.', options: ['13', '15', '17', '19'], answer: 1 },
	{ subject: 'Mathematics', topic: 'Number Bases', question: 'What is the binary equivalent of decimal 10?', options: ['1010', '1100', '1110', '1001'], answer: 0 },
	{ subject: 'Mathematics', topic: 'Number Bases', question: 'Convert the hexadecimal number 1A to decimal.', options: ['26', '28', '30', '32'], answer: 0 },
	{ subject: 'Mathematics', topic: 'Number Bases', question: 'What is the decimal value of the binary number 1100?', options: ['10', '12', '14', '16'], answer: 1 },
	{ subject: 'Mathematics', topic: 'Number Bases', question: 'Convert the octal number 25 to decimal.', options: ['17', '18', '19', '20'], answer: 0 },
	{ subject: 'Mathematics', topic: 'Number Bases', question: 'Which number is written as 12 in base five?', options: ['5', '6', '7', '8'], answer: 1 },
	{ subject: 'Mathematics', topic: 'Number Bases', difficulty: 'Advanced', question: 'What is 2F in hexadecimal written in decimal?', options: ['31', '42', '47', '52'], answer: 2 },
	{ subject: 'Mathematics', topic: 'Number Bases', difficulty: 'Advanced', question: 'What is the binary representation of decimal 13?', options: ['1010', '1011', '1101', '1110'], answer: 2 }
);

questions.push(
	{ subject: 'Mathematics', topic: 'Fractions', question: 'Simplify 18/24.', options: ['3/4', '4/5', '2/3', '5/6'], answer: 0 },
	{ subject: 'Mathematics', topic: 'Fractions', question: 'What is 2/3 + 1/6?', options: ['1/2', '3/6', '5/6', '7/6'], answer: 2 },
	{ subject: 'Mathematics', topic: 'Percentages', question: 'What is 35% of 160?', options: ['48', '52', '56', '60'], answer: 2 },
	{ subject: 'Mathematics', topic: 'Percentages', question: 'A price increases from 80 to 100. What is the percentage increase?', options: ['15%', '20%', '25%', '30%'], answer: 2 },
	{ subject: 'Mathematics', topic: 'Algebra', question: 'Solve for x: 5x - 8 = 22.', options: ['5', '6', '7', '8'], answer: 1 },
	{ subject: 'Mathematics', topic: 'Algebra', question: 'Expand: 3(x + 4).', options: ['3x + 4', '3x + 12', 'x + 12', 'x + 7'], answer: 1 },
	{ subject: 'Mathematics', topic: 'Geometry', question: 'What is the circumference of a circle with radius 7 cm? Use π ≈ 22/7.', options: ['22 cm', '44 cm', '66 cm', '154 cm'], answer: 1 },
	{ subject: 'Mathematics', topic: 'Geometry', question: 'The interior angles of a pentagon add up to:', options: ['360°', '540°', '720°', '900°'], answer: 1 },
	{ subject: 'Mathematics', topic: 'Statistics', question: 'What is the range of 4, 7, 9, 12, 15?', options: ['7', '9', '11', '15'], answer: 2 },
	{ subject: 'Mathematics', topic: 'Statistics', question: 'The mean of 2, 6, 10, and 18 is:', options: ['8', '9', '10', '12'], answer: 1 },
	{ subject: 'Mathematics', topic: 'Graphs', question: 'Which graph has a straight line with constant slope?', options: ['Cubic', 'Linear', 'Quadratic', 'Exponential'], answer: 1 },
	{ subject: 'Mathematics', topic: 'Graphs', question: 'If y = x^2, what shape is the graph?', options: ['Line', 'Parabola', 'Circle', 'Hyperbola'], answer: 1 },
	{ subject: 'Mathematics', topic: 'Probability', question: 'What is the probability of rolling a 6 on a six-sided die?', options: ['1/4', '1/5', '1/6', '1/3'], answer: 2 },
	{ subject: 'Mathematics', topic: 'Probability', question: 'A bag contains 2 blue, 3 red, and 5 green marbles. What is the probability of picking a red marble?', options: ['1/2', '1/3', '3/10', '2/5'], answer: 2 },
	{ subject: 'Science', topic: 'Biology', question: 'Which cell part contains genetic material?', options: ['Membrane', 'Nucleus', 'Vacuole', 'Cytoplasm'], answer: 1 },
	
	{ subject: 'Science', topic: 'Biology', question: 'What is the main job of red blood cells?', options: ['Carry oxygen', 'Digest food', 'Store calcium', 'Fight germs'], answer: 0 },
	{ subject: 'Science', topic: 'Biology', question: 'Which process moves water through a plant?', options: ['Transpiration', 'Evaporation', 'Condensation', 'Freezing'], answer: 0 },
	{ subject: 'Science', topic: 'Physics', question: 'Which force resists motion between surfaces?', options: ['Gravity', 'Friction', 'Magnetism', 'Pressure'], answer: 1 },
	{ subject: 'Science', topic: 'Physics', question: 'What happens to the speed of a moving object when balanced forces act on it?', options: ['It speeds up', 'It slows down', 'It stays constant', 'It turns around'], answer: 2 },
	{ subject: 'Science', topic: 'Chemistry', question: 'What are the three states of matter?', options: ['Solid, liquid, gas', 'Solid, vapor, plasma', 'Liquid, crystal, gas', 'Gas, foam, fluid'], answer: 0 },
	{ subject: 'Science', topic: 'Chemistry', question: 'Which element has the symbol Na?', options: ['Nitrogen', 'Sodium', 'Neon', 'Nickel'], answer: 1 },
	{ subject: 'Science', topic: 'Earth Science', question: 'What type of rock is formed by heat and pressure?', options: ['Igneous', 'Sedimentary', 'Metamorphic', 'Volcanic'], answer: 2 },
	{ subject: 'Science', topic: 'Space', question: 'Which planet is known as the Red Planet?', options: ['Venus', 'Mars', 'Jupiter', 'Mercury'], answer: 1 },
	{ subject: 'Science', topic: 'Energy', question: 'What is renewable energy?', options: ['Energy that can be replaced naturally', 'Energy that is always expensive', 'Energy from only coal', 'Energy from fossil fuels'], answer: 0 },
	{ subject: 'English', topic: 'Grammar', question: 'Choose the correct sentence.', options: ['She don’t know the answer.', 'She doesn’t know the answer.', 'She not know the answer.', 'She didn’t knew the answer.'], answer: 1 },
	{ subject: 'English', topic: 'Grammar', question: 'Which word is a pronoun?', options: ['Quickly', 'Under', 'They', 'Beautiful'], answer: 2 },
	{ subject: 'English', topic: 'Vocabulary', question: 'What is the meaning of “benevolent”?', options: ['Cruel', 'Kind', 'Busy', 'Silent'], answer: 1 },
	{ subject: 'English', topic: 'Literature', question: 'A poem with a regular beat and pattern of sounds is called:', options: ['A narrative', 'A stanza', 'A rhyme scheme', 'A sonnet'], answer: 3 },
	{ subject: 'English', topic: 'Writing', question: 'Which sentence is an example of a topic sentence?', options: ['The school library has many books and resources.', 'Suddenly, the lights went out.', 'The cat sat on the mat.', 'I am going home now.'], answer: 0 },
	{ subject: 'History', topic: 'World History', question: 'The Great Wall was built mainly to protect which state?', options: ['Egypt', 'China', 'Rome', 'Greece'], answer: 1 },
	{ subject: 'History', topic: 'Civics', question: 'Who is the head of a local government in a city or town?', options: ['President', 'Mayor', 'Teacher', 'Judge'], answer: 1 },
	{ subject: 'History', topic: 'Ancient Civilizations', question: 'Which civilization is known for the city-state of Sparta?', options: ['Roman', 'Greek', 'Persian', 'Aztec'], answer: 1 },
	{ subject: 'History', topic: 'Modern History', question: 'The Industrial Revolution began in which country?', options: ['France', 'Germany', 'Britain', 'Italy'], answer: 2 },
	{ subject: 'Geography', topic: 'Maps', question: 'What is a contour line used to show?', options: ['Population size', 'Land height and relief', 'Road names', 'Political boundaries'], answer: 1 },
	{ subject: 'Geography', topic: 'Earth', question: 'Which is the longest river in the world?', options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], answer: 0 },
	{ subject: 'Geography', topic: 'Climate', question: 'What is weather?', options: ['Average conditions over many years', 'Day-to-day atmospheric conditions', 'The Earth’s rotation', 'Ocean movement'], answer: 1 },
	{ subject: 'Geography', topic: 'Resources', question: 'Which natural resource is most often used to generate electricity?', options: ['Coal', 'Plastic', 'Glass', 'Copper'], answer: 0 },
	{ subject: 'Computing', topic: 'Programming', question: 'Which language is used to style a web page?', options: ['HTML', 'CSS', 'SQL', 'Python'], answer: 1 },
	{ subject: 'Computing', topic: 'Programming', question: 'What does CSS stand for?', options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Syntax System', 'Central Style Source'], answer: 1 },
	{ subject: 'Computing', topic: 'Algorithms', question: 'Which sorting method compares adjacent values repeatedly?', options: ['Bubble sort', 'Binary search', 'Hashing', 'Traversal'], answer: 0 },
	{ subject: 'Computing', topic: 'Cybersecurity', question: 'What is malware?', options: ['A type of hardware', 'Malicious software', 'A browser tab', 'A secure password'], answer: 1 },
	{ subject: 'Computing', topic: 'Data', question: 'Which is a good example of structured data?', options: ['A spreadsheet', 'A handwritten note', 'A random sketch', 'A poem without formatting'], answer: 0 },
	{ subject: 'Art', topic: 'Drawing', question: 'Which technique creates darker values by pressing harder with a pencil?', options: ['Blending', 'Hatching', 'Shading', 'Outlining'], answer: 2 },
	{ subject: 'Art', topic: 'Design', question: 'What does rhythm in art refer to?', options: ['Repetition of visual elements', 'The size of a painting', 'The artist’s signature', 'The paper thickness'], answer: 0 },
	{ subject: 'Art', topic: 'Art History', question: 'Which movement is known for bold, bright colors and simplified forms?', options: ['Renaissance', 'Cubism', 'Impressionism', 'Romanticism'], answer: 1 },
	{ subject: 'Music', topic: 'Theory', question: 'What is an interval in music?', options: ['The distance between two notes', 'A type of drum', 'A chord pattern', 'The song title'], answer: 0 },
	{ subject: 'Music', topic: 'Instruments', question: 'Which instrument is played by blowing air through a reed?', options: ['Trumpet', 'Clarinet', 'Violin', 'Piano'], answer: 1 },
	{ subject: 'Health', topic: 'Wellness', question: 'What is the best way to prevent infection during illness?', options: ['Handwashing', 'Skipping food', 'Avoiding all exercise', 'Sleeping only once a week'], answer: 0 },
	{ subject: 'Health', topic: 'Nutrition', question: 'Which nutrient helps build and repair body tissues?', options: ['Protein', 'Salt', 'Sugar', 'Petrol'], answer: 0 },
	{ subject: 'Environmental Studies', topic: 'Ecology', question: 'What is biodiversity?', options: ['The variety of living things in an area', 'The amount of rainfall', 'The number of clouds', 'The size of a mountain'], answer: 0 },
	{ subject: 'Environmental Studies', topic: 'Sustainability', question: 'Which action helps conserve water?', options: ['Fixing leaks', 'Leaving taps running', 'Throwing away plastic bottles', 'Using more energy'], answer: 0 },
	{ subject: 'Economics', topic: 'Money', question: 'What is inflation?', options: ['A rise in general prices over time', 'A fall in wages', 'A government loan', 'A form of tax'], answer: 0 },
	{ subject: 'Economics', topic: 'Trade', question: 'What is an import?', options: ['A good brought into a country', 'A local tax', 'A bank account', 'A type of worker'], answer: 0 },
	{ subject: 'Business', topic: 'Marketing', question: 'A target market is:', options: ['A group of customers a business aims to sell to', 'A company logo', 'A warehouse', 'A product package'], answer: 0 },
	{ subject: 'Business', topic: 'Finance', question: 'What is revenue?', options: ['Money earned from sales', 'Money spent on rent', 'Money borrowed from a friend', 'A balance sheet'], answer: 0 },
	{ subject: 'Physical Education', topic: 'Fitness', question: 'Which exercise helps improve muscular strength?', options: ['Weight training', 'Reading quietly', 'Stretching fingers only', 'Sitting still'], answer: 0 },
	{ subject: 'Physical Education', topic: 'Sports', question: 'What is teamwork?', options: ['Working together to achieve a goal', 'Playing alone', 'Ignoring rules', 'Skipping practice'], answer: 0 },
	{ subject: 'Mathematics', topic: 'Algebra', difficulty: 'Advanced', question: 'If f(x) = 2x^2 - 3x + 1, what is f(2)?', options: ['1', '3', '5', '7'], answer: 2 },
	{ subject: 'Mathematics', topic: 'Geometry', difficulty: 'Advanced', question: 'What is the area of a circle with radius 3 cm?', options: ['6π', '9π', '12π', '18π'], answer: 1 },
	{ subject: 'Science', topic: 'Physics', difficulty: 'Advanced', question: 'What quantity is measured in watts?', options: ['Energy', 'Power', 'Mass', 'Force'], answer: 1 },
	{ subject: 'Science', topic: 'Chemistry', difficulty: 'Advanced', question: 'What is the pH of a neutral solution?', options: ['0', '5', '7', '10'], answer: 2 },
	{ subject: 'English', topic: 'Rhetoric', difficulty: 'Advanced', question: 'Which phrase is an example of alliteration?', options: ['Bright blue sky', 'The cat slept', 'He ran very fast', 'The book is old'], answer: 0 },
	{ subject: 'History', topic: 'Civics', difficulty: 'Advanced', question: 'What is the purpose of a constitution?', options: ['To fix roads only', 'To set out the basic rules of government', 'To choose sports teams', 'To track population only'], answer: 1 },
	{ subject: 'Computing', topic: 'Programming', difficulty: 'Advanced', question: 'What does a while loop do?', options: ['Runs code once', 'Runs code repeatedly while a condition is true', 'Deletes a file', 'Creates a variable'], answer: 1 },
	{ subject: 'Art', topic: 'Perspective', difficulty: 'Advanced', question: 'In art, linear perspective helps create the illusion of:', options: ['Sound', 'Depth', 'Texture', 'Weight'], answer: 1 },
	{ subject: 'Music', topic: 'Theory', difficulty: 'Advanced', question: 'A major scale is made up of how many notes?', options: ['5', '7', '8', '12'], answer: 1 },
	{ subject: 'Business', topic: 'Leadership', difficulty: 'Advanced', question: 'What is strategic planning?', options: ['Setting long-term goals and direction', 'Choosing office colors', 'Paying employee wages only', 'Recording customer complaints'], answer: 0 },
	
);

questions.push(
	{ subject: 'English', topic: 'Grammar', question: 'Which sentence uses a plural noun correctly?', options: ['The childrens are playing.', 'The children are playing.', 'The child are playing.', 'The childrens is playing.'], answer: 1 },
	{ subject: 'English', topic: 'Grammar', question: 'Which punctuation mark ends a direct question?', options: ['A comma', 'A full stop', 'A question mark', 'A colon'], answer: 2 },
	{ subject: 'English', topic: 'Grammar', question: 'Choose the correct possessive form.', options: ["The dogs collar is blue.", "The dog's collar is blue.", "The dogs' collar is blue.", "The dog collar's is blue."], answer: 1 },
	{ subject: 'English', topic: 'Vocabulary', question: 'Which word is a synonym for “generous”?', options: ['Selfish', 'Giving', 'Nervous', 'Careless'], answer: 1 },
	{ subject: 'English', topic: 'Vocabulary', question: 'What does “reluctant” mean?', options: ['Eager to begin', 'Unwilling or hesitant', 'Very noisy', 'Easy to understand'], answer: 1 },
	{ subject: 'English', topic: 'Vocabulary', question: 'Which word best completes the sentence: “The detective looked for ____ in the case.”', options: ['evidence', 'weather', 'furniture', 'laughter'], answer: 0 },
	{ subject: 'English', topic: 'Reading', question: 'What is the main idea of a passage?', options: ['A small detail', 'The central message', 'The author’s name', 'The final word'], answer: 1 },
	{ subject: 'English', topic: 'Reading', question: 'What can a reader use to work out the meaning of an unfamiliar word?', options: ['Context clues', 'The page number only', 'The book cover only', 'A random guess'], answer: 0 },
	{ subject: 'English', topic: 'Writing', question: 'Which transition word shows contrast?', options: ['Therefore', 'Similarly', 'However', 'Finally'], answer: 2 },
	{ subject: 'English', topic: 'Writing', question: 'Which is the best opening for a formal email?', options: ['Hey there!', 'Dear Ms. Okafor,', 'What’s up?', 'Hi buddy,'], answer: 1 },
	{ subject: 'English', topic: 'Poetry', question: 'What is a simile?', options: ['A comparison using “like” or “as”', 'A statement of fact only', 'A repeated consonant sound', 'The ending of a story'], answer: 0 },
	{ subject: 'English', topic: 'Literature', question: 'What is the setting of a story?', options: ['The lesson learned', 'Where and when it happens', 'The list of characters', 'The author’s signature'], answer: 1 },
	{ subject: 'English', topic: 'Grammar', difficulty: 'Core', question: 'Which sentence is written in the passive voice?', options: ['The storm damaged the roof.', 'The roof was damaged by the storm.', 'The storm is damaging the roof.', 'The roof damaged the storm.'], answer: 1 },
	{ subject: 'English', topic: 'Writing', difficulty: 'Core', question: 'Which source is most reliable for a research project?', options: ['An unsigned social-media post', 'A peer-reviewed journal article', 'An advert for a product', 'A rumour from a friend'], answer: 1 },
	{ subject: 'English', topic: 'Rhetoric', difficulty: 'Core', question: 'What is the purpose of a rhetorical question?', options: ['To obtain a factual answer', 'To make the audience think about a point', 'To introduce a new character', 'To correct spelling'], answer: 1 },
	{ subject: 'English', topic: 'Literature', difficulty: 'Advanced', question: 'What does a symbol in a story usually represent?', options: ['A deeper idea beyond its literal meaning', 'Only its dictionary definition', 'A spelling mistake', 'The author’s address'], answer: 0 },
	{ subject: 'English', topic: 'Grammar', difficulty: 'Advanced', question: 'Which sentence uses parallel structure?', options: ['She enjoys reading, to swim, and cycling.', 'She enjoys reading, swimming, and cycling.', 'She enjoys to read, swimming, and to cycle.', 'She enjoys reading, to swim, and to cycle.'], answer: 1 },
	{ subject: 'Mathematics', topic: 'Algebra', question: 'Solve: 3(x - 2) = 15.', options: ['3', '5', '7', '9'], answer: 2 },
	{ subject: 'Mathematics', topic: 'Data', question: 'What is the median of 8, 3, 5, 9, 7?', options: ['5', '7', '8', '9'], answer: 1 },
	{ subject: 'Science', topic: 'Health', question: 'Which body system helps remove waste from the body?', options: ['Digestive', 'Excretory', 'Nervous', 'Skeletal'], answer: 1 },
	{ subject: 'English', topic: 'Poetry', question: 'What is a metaphor?', options: ['A comparison using “like” or “as”', 'A direct comparison without “like” or “as”', 'A summary sentence', 'A type of punctuation'], answer: 1 },
	{ subject: 'History', topic: 'Empires', question: 'Which empire was ruled by Julius Caesar?', options: ['Ottoman', 'Roman', 'Mongol', 'Byzantine'], answer: 1 },
	{ subject: 'Geography', topic: 'Earth', question: 'Which process breaks down rocks at Earth’s surface?', options: ['Weathering', 'Eruption', 'Rotation', 'Condensation'], answer: 0 },
	{ subject: 'Computing', topic: 'Networks', question: 'What does Wi‑Fi allow devices to do?', options: ['Connect wirelessly to a network', 'Create a physical cable', 'Increase battery life', 'Print on paper'], answer: 0 },
	{ subject: 'Art', topic: 'Color Theory', question: 'What are tertiary colors made from?', options: ['Three primary colors', 'A primary and a secondary color', 'Only black and white', 'Only warm colors'], answer: 1 },
	{ subject: 'Music', topic: 'Performance', question: 'What does dynamics refer to in music?', options: ['The loudness or softness of sound', 'The length of the song', 'The sheet music size', 'The instrument brand'], answer: 0 },
	{ subject: 'Physical Education', topic: 'Safety', question: 'What is the purpose of a cool-down after exercise?', options: ['To lower heart rate gradually', 'To stop breathing', 'To increase stress', 'To avoid stretching'], answer: 0 }
);

questions.forEach((question) => {
	if (!question.difficulty) question.difficulty = 'Foundation';
});

const setupView = document.querySelector('#setup-view');
const subjectOptions = document.querySelector('#subject-options');
const questionNumber = document.querySelector('#question-number');
const questionIndex = document.querySelector('#question-index');
const questionText = document.querySelector('#question-text');
const topicTag = document.querySelector('#topic-tag');
const statusText = document.querySelector('#status-text');
const liveScore = document.querySelector('#live-score');
const liveCorrect = document.querySelector('#live-correct');
const liveAnswered = document.querySelector('#live-answered');
const answersContainer = document.querySelector('#answers');
const progressTrack = document.querySelector('#progress-track');
const progressBar = document.querySelector('#progress-bar');
const previousButton = document.querySelector('#previous-button');
const nextButton = document.querySelector('#next-button');
const quizView = document.querySelector('#quiz-view');
const resultView = document.querySelector('#result-view');
const scoreValue = document.querySelector('#score-value');
const resultTotal = document.querySelector('#result-total');
const resultMessage = document.querySelector('#result-message');
const correctionList = document.querySelector('#correction-list');
const correctionSummary = document.querySelector('#correction-summary');
const restartButton = document.querySelector('#restart-button');
const changeSettingsButton = document.querySelector('#change-settings-button');
const startButton = document.querySelector('#start-button');
const homeButton = document.querySelector('#home-button');
const topicOptions = document.querySelector('#topic-options');
const questionAvailability = document.querySelector('#question-availability');
const countHint = document.querySelector('#count-hint');
const totalQuestionCount = document.querySelector('#total-question-count');
const profileNameInput = document.querySelector('#profile-name');
const profileAvatar = document.querySelector('#profile-avatar');
const profileChip = document.querySelector('#profile-chip');
const profileLevel = document.querySelector('#profile-level');
const profileRank = document.querySelector('#profile-rank');
const setupBestScore = document.querySelector('#setup-best-score');
const scoreboardPlayer = document.querySelector('#scoreboard-player');
const completedSessions = document.querySelector('#completed-sessions');
const bestScore = document.querySelector('#best-score');
const averageScore = document.querySelector('#average-score');
const profileDisplayName = document.querySelector('#profile-display-name');
const profileClassBadge = document.querySelector('#profile-class-badge');
const profileSessions = document.querySelector('#profile-sessions');
const profileAverage = document.querySelector('#profile-average');
const profileBest = document.querySelector('#profile-best');
const profileProgressValue = document.querySelector('#profile-progress-value');
const profileProgressBar = document.querySelector('#profile-progress-bar');
const splashScreen = document.querySelector('#splash-screen');
const authShell = document.querySelector('#auth-shell');
const appShell = document.querySelector('#app-shell');
const authForm = document.querySelector('#auth-form');
const authNameInput = document.querySelector('#auth-name');
const authEmailInput = document.querySelector('#auth-email');
const authPasswordInput = document.querySelector('#auth-password');
const loginTab = document.querySelector('#login-tab');
const signupTab = document.querySelector('#signup-tab');
const authKicker = document.querySelector('#auth-kicker');
const authTitle = document.querySelector('#auth-title');
const authHelper = document.querySelector('#auth-helper');
const authSubmit = document.querySelector('#auth-submit');
const googleAuth = document.querySelector('#google-auth');
const facebookAuth = document.querySelector('#facebook-auth');
const settingsButton = document.querySelector('#settings-button');
const settingsPanel = document.querySelector('#settings-panel');
const settingsClose = document.querySelector('#settings-close');
const settingsNameInput = document.querySelector('#settings-name-input');
const settingsEmailInput = document.querySelector('#settings-email-input');
const settingsForm = document.querySelector('#settings-form');
const settingsName = document.querySelector('#settings-name');
const settingsEmail = document.querySelector('#settings-email');
const settingsAvatar = document.querySelector('#settings-avatar');
const settingsSessions = document.querySelector('#settings-sessions');
const settingsBest = document.querySelector('#settings-best');
const settingsAverage = document.querySelector('#settings-average');
const settingsResults = document.querySelector('#settings-results');
const logoutButton = document.querySelector('#logout-button');
const editProfileButton = document.querySelector('#edit-profile-button');
const cancelSettingsButton = document.querySelector('#cancel-settings-button');
const saveProfileButton = document.querySelector('#save-profile-button');

appShell.hidden = true;
authShell.hidden = true;

const DB_NAME = 'numeris-db';
const PROFILE_STORE = 'profile';
const SESSIONS_STORE = 'sessions';
const AUTH_DB_NAME = 'numeris-auth-db';
const AUTH_STORE = 'users';
const DEFAULT_ACCOUNT_EMAIL = 'labadeolamiposi@gmail.com';
const DEFAULT_ACCOUNT_NAME = 'Labadeola Miposi';
const AUTH_ACCOUNT_LABEL = 'labadeolamiposi@gmail.com';
const AUTH_API_BASE = 'http://localhost:3001/api';

let savedProfile;
let dbPromise = null;
let authDbPromise = null;

function openDatabase() {
	if (!('indexedDB' in window)) {
		return Promise.resolve(null);
	}

	if (dbPromise) return dbPromise;

	dbPromise = new Promise((resolve, reject) => {
		const request = window.indexedDB.open(DB_NAME, 1);
		request.onupgradeneeded = () => {
			const db = request.result;
			if (!db.objectStoreNames.contains(PROFILE_STORE)) {
				db.createObjectStore(PROFILE_STORE, { keyPath: 'id' });
			}
			if (!db.objectStoreNames.contains(SESSIONS_STORE)) {
				db.createObjectStore(SESSIONS_STORE, { keyPath: 'id', autoIncrement: true });
			}
		};
		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error || new Error('IndexedDB failed to open'));
	});

	return dbPromise;
}

async function loadProfileFromDatabase() {
	if (!('indexedDB' in window)) return null;

	try {
		const db = await openDatabase();
		if (!db) return null;

		return await new Promise((resolve, reject) => {
			const tx = db.transaction(PROFILE_STORE, 'readonly');
			const store = tx.objectStore(PROFILE_STORE);
			const request = store.get('profile');
			request.onsuccess = () => resolve(request.result || null);
			request.onerror = () => reject(request.error || new Error('Profile could not be loaded'));
		});
	} catch (error) {
		console.warn('IndexedDB profile load failed:', error);
		return null;
	}
}

async function saveProfileToDatabase() {
	if (!('indexedDB' in window)) return;

	try {
		const db = await openDatabase();
		if (!db) return;

		const tx = db.transaction(PROFILE_STORE, 'readwrite');
		const store = tx.objectStore(PROFILE_STORE);
		store.put({ id: 'profile', ...savedProfile });
	} catch (error) {
		console.warn('IndexedDB profile save failed:', error);
	}
}

async function saveSessionToDatabase(sessionResult) {
	if (!('indexedDB' in window)) return;

	try {
		const db = await openDatabase();
		if (!db) return;

		const tx = db.transaction(SESSIONS_STORE, 'readwrite');
		const store = tx.objectStore(SESSIONS_STORE);
		store.add({
			timestamp: new Date().toISOString(),
			name: sessionResult.name,
			score: sessionResult.score,
			total: sessionResult.total,
			className: sessionResult.className,
			percentage: sessionResult.percentage
		});
	} catch (error) {
		console.warn('IndexedDB session save failed:', error);
	}
}

try {
	savedProfile = JSON.parse(localStorage.getItem('numeris-profile') || '{"name":"","scores":[]}');
	if (!Array.isArray(savedProfile.scores)) savedProfile.scores = [];
} catch {
	savedProfile = { name: '', scores: [] };
}

(async function bootstrapProfile() {
	const dbProfile = await loadProfileFromDatabase();
	if (dbProfile && typeof dbProfile === 'object') {
		savedProfile = { ...savedProfile, ...dbProfile, scores: Array.isArray(dbProfile.scores) ? dbProfile.scores : savedProfile.scores || [] };
	}
	if (!savedProfile || !Array.isArray(savedProfile.scores)) {
		savedProfile = { name: '', scores: [] };
	}
	if (savedProfile.name) {
		profileNameInput.value = savedProfile.name;
	}
	updateProfileDisplay();
})();

const subjects = [...new Set(questions.map((question) => question.subject))];
const technicalTopics = new Set(['Algebra', 'Logic', 'Physics', 'Chemistry', 'Programming', 'Digital Literacy', 'Civics', 'Art History', 'Design', 'Calculus', 'Probability', 'Algorithms', 'Networks', 'Markets', 'Perspective', 'Climate Science', 'Earth Systems', 'Sports Science', 'Number Bases']);
let activeQuestions = [];
let currentQuestion = 0;
let selectedAnswers = [];
let selectedClass = 'Foundation';
let authMode = 'login';

function setAuthMode(mode) {
	authMode = mode;
	const isSignup = mode === 'signup';
	loginTab.classList.toggle('active', !isSignup);
	signupTab.classList.toggle('active', isSignup);
	loginTab.setAttribute('aria-selected', String(!isSignup));
	signupTab.setAttribute('aria-selected', String(isSignup));
	authKicker.textContent = isSignup ? 'Start your practice' : 'Welcome back';
	authTitle.textContent = isSignup ? 'Create your profile.' : 'Return to your practice.';
	authHelper.textContent = isSignup ? 'Create a local profile to keep your scores together.' : 'Your progress is stored in this device database.';
	authPasswordInput.autocomplete = isSignup ? 'new-password' : 'current-password';
	authSubmit.innerHTML = `${isSignup ? 'Sign up' : 'Log in'} <span aria-hidden="true">&rarr;</span>`;
	authEmailInput.value = AUTH_ACCOUNT_LABEL;
	authNameInput.value = DEFAULT_ACCOUNT_NAME;
	authNameInput.focus();
}

function normalizeEmail(email) {
	return String(email || '').trim().toLowerCase();
}

function openAuthDatabase() {
	if (!('indexedDB' in window)) {
		return Promise.resolve(null);
	}

	if (authDbPromise) return authDbPromise;

	authDbPromise = new Promise((resolve, reject) => {
		const request = window.indexedDB.open(AUTH_DB_NAME, 1);
		request.onupgradeneeded = () => {
			const db = request.result;
			if (!db.objectStoreNames.contains(AUTH_STORE)) {
				db.createObjectStore(AUTH_STORE, { keyPath: 'email' });
			}
		};
		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error || new Error('IndexedDB auth failed to open'));
	});

	return authDbPromise;
}

async function apiRequest(path, payload = null, method = 'POST') {
	const headers = { 'Content-Type': 'application/json' };
	const options = {
		method,
		headers
	};

	if (payload !== null) {
		options.body = JSON.stringify(payload);
	}

	const response = await fetch(`${AUTH_API_BASE}${path}`, options);
	const data = await response.json().catch(() => ({}));
	if (!response.ok) {
		throw new Error(data.message || 'Request failed');
	}
	return data;
}

async function getUserByEmail(email) {
	const normalizedEmail = normalizeEmail(email);
	if (!normalizedEmail) return null;

	try {
		const data = await apiRequest(`/auth/user?email=${encodeURIComponent(normalizedEmail)}`, null, 'GET');
		return data.user || null;
	} catch (error) {
		console.warn('Auth lookup failed:', error);
	}

	if (!('indexedDB' in window)) return null;

	try {
		const db = await openAuthDatabase();
		if (!db) return null;

		return await new Promise((resolve, reject) => {
			const tx = db.transaction(AUTH_STORE, 'readonly');
			const store = tx.objectStore(AUTH_STORE);
			const request = store.get(normalizedEmail);
			request.onsuccess = () => resolve(request.result || null);
			request.onerror = () => reject(request.error || new Error('User lookup failed'));
		});
	} catch (error) {
		console.warn('IndexedDB auth lookup failed:', error);
		return null;
	}
}

async function saveUserAccount(account) {
	const normalizedEmail = normalizeEmail(account.email);
	if (!normalizedEmail) return null;

	try {
		const data = await apiRequest('/auth/register', {
			email: normalizedEmail,
			name: account.name || DEFAULT_ACCOUNT_NAME,
			password: account.password || 'demo1234',
			provider: account.provider || 'email'
		}, 'POST');
		return data.user || null;
	} catch (error) {
		console.warn('Backend account save failed:', error);
	}

	if (!('indexedDB' in window)) return null;

	try {
		const db = await openAuthDatabase();
		if (!db) return null;

		const payload = {
			email: normalizedEmail,
			name: account.name || DEFAULT_ACCOUNT_NAME,
			password: account.password || 'demo1234',
			provider: account.provider || 'email',
			lastLogin: new Date().toISOString()
		};

		await new Promise((resolve, reject) => {
			const tx = db.transaction(AUTH_STORE, 'readwrite');
			const store = tx.objectStore(AUTH_STORE);
			const request = store.put(payload);
			request.onsuccess = () => resolve();
			request.onerror = () => reject(request.error || new Error('Account save failed'));
		});

		return payload;
	} catch (error) {
		console.warn('IndexedDB account persistence failed:', error);
		return null;
	}
}

async function ensureDefaultAccount() {
	const existing = await getUserByEmail(DEFAULT_ACCOUNT_EMAIL);
	if (existing) return existing;
	try {
		return await apiRequest('/auth/provider', {
			email: DEFAULT_ACCOUNT_EMAIL,
			name: DEFAULT_ACCOUNT_NAME,
			password: 'demo1234',
			provider: 'email'
		}, 'POST');
	} catch (error) {
		console.warn('Default account setup failed:', error);
		return saveUserAccount({
			email: DEFAULT_ACCOUNT_EMAIL,
			name: DEFAULT_ACCOUNT_NAME,
			password: 'demo1234',
			provider: 'email'
		});
	}
}

function setAuthMessage(message, isError = false) {
	authHelper.textContent = message;
	authHelper.style.color = isError ? '#bc4d3b' : '#71807b';
}

async function completeAuthSession(accountName, accountEmail, provider = 'email') {
	const finalName = (accountName || DEFAULT_ACCOUNT_NAME).trim() || DEFAULT_ACCOUNT_NAME;
	const finalEmail = normalizeEmail(accountEmail || DEFAULT_ACCOUNT_EMAIL) || DEFAULT_ACCOUNT_EMAIL;
	savedProfile.name = finalName;
	savedProfile.email = finalEmail;
	savedProfile.authenticated = true;
	savedProfile.provider = provider;
	localStorage.setItem('numeris-profile', JSON.stringify(savedProfile));
	saveProfileToDatabase();
	profileNameInput.value = finalName;
	updateProfileDisplay();
	authShell.hidden = true;
	appShell.hidden = false;
}

function enterQuiz() {
	const enteredName = authNameInput.value.trim();
	if (!enteredName) {
		authNameInput.focus();
		return;
	}
	completeAuthSession(enteredName, authEmailInput.value, 'email');
}

async function continueWithProvider(provider) {
	await ensureDefaultAccount();
	const providerName = provider === 'Google' ? 'Google User' : provider === 'Facebook' ? 'Facebook User' : 'Provider User';
	const existingAccount = await getUserByEmail(DEFAULT_ACCOUNT_EMAIL);
	const account = existingAccount || {
		email: DEFAULT_ACCOUNT_EMAIL,
		name: DEFAULT_ACCOUNT_NAME,
		password: 'demo1234',
		provider: provider.toLowerCase()
	};
	const finalName = account.name || providerName;
	authNameInput.value = finalName;
	authEmailInput.value = AUTH_ACCOUNT_LABEL;
	try {
		const providerResult = await apiRequest('/auth/provider', {
			email: DEFAULT_ACCOUNT_EMAIL,
			name: finalName,
			password: account.password || 'demo1234',
			provider: provider.toLowerCase()
		}, 'POST');
		if (providerResult && providerResult.user) {
			completeAuthSession(providerResult.user.name || finalName, providerResult.user.email || DEFAULT_ACCOUNT_EMAIL, providerResult.user.provider || provider.toLowerCase());
			return;
		}
	} catch (error) {
		console.warn('Provider auth failed:', error);
	}
	await saveUserAccount({
		email: DEFAULT_ACCOUNT_EMAIL,
		name: finalName,
		password: account.password || 'demo1234',
		provider: provider.toLowerCase()
	});
	completeAuthSession(finalName, DEFAULT_ACCOUNT_EMAIL, provider.toLowerCase());
}

function getPlayerName() {
	return profileNameInput.value.trim() || 'Guest';
}

function updateSettingsPanel() {
	const name = getPlayerName();
	const scores = Array.isArray(savedProfile.scores) ? savedProfile.scores : [];
	const best = scores.length ? Math.max(...scores) : 0;
	const average = scores.length ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : 0;
	const initial = name.charAt(0).toUpperCase();
	settingsName.textContent = name;
	settingsEmail.textContent = savedProfile.email || 'No email added';
	settingsAvatar.textContent = initial;
	settingsSessions.textContent = String(scores.length);
	settingsBest.textContent = `${best}%`;
	settingsAverage.textContent = `${average}%`;
	settingsNameInput.value = name;
	settingsEmailInput.value = savedProfile.email || '';
	settingsResults.innerHTML = '';
	if (!scores.length) {
		settingsResults.innerHTML = '<li class="result-empty">No results yet.</li>';
		return;
	}
	[...scores].slice(-5).reverse().forEach((score, index) => {
		const li = document.createElement('li');
		li.innerHTML = `<strong>${score}%</strong><span>Result ${scores.length - index}</span>`;
		settingsResults.appendChild(li);
	});
}

function updateProfileDisplay() {
	const name = getPlayerName();
	const initial = name.charAt(0).toUpperCase();
	const scores = savedProfile.scores;
	const best = scores.length ? Math.max(...scores) : 0;
	const average = scores.length ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : 0;
	const level = best >= 90 ? 'Scholar' : best >= 75 ? 'Achiever' : best >= 50 ? 'Practitioner' : 'New learner';
	profileAvatar.textContent = initial;
	profileChip.textContent = name;
	scoreboardPlayer.textContent = name;
	profileDisplayName.textContent = name;
	profileClassBadge.textContent = `${selectedClass} track`;
	profileLevel.textContent = level;
	profileRank.textContent = scores.length ? `${scores.length} completed session${scores.length === 1 ? '' : 's'}` : 'Profile level';
	setupBestScore.textContent = `${best}%`;
	completedSessions.textContent = scores.length;
	bestScore.textContent = `${best}%`;
	averageScore.textContent = `${average}%`;
	profileSessions.textContent = scores.length;
	profileAverage.textContent = `${average}%`;
	profileBest.textContent = `${best}%`;
	profileProgressValue.textContent = `${best}%`;
	profileProgressBar.style.width = `${best}%`;
	updateSettingsPanel();
}

function saveProfile() {
	savedProfile.name = profileNameInput.value.trim();
	localStorage.setItem('numeris-profile', JSON.stringify(savedProfile));
	saveProfileToDatabase();
	updateProfileDisplay();
}

function openSettings() {
	settingsPanel.hidden = false;
	requestAnimationFrame(() => {
		settingsPanel.classList.add('visible');
	});
	updateSettingsPanel();
}

function closeSettings() {
	settingsPanel.classList.remove('visible');
	window.setTimeout(() => {
		settingsPanel.hidden = true;
	}, 180);
}

function syncSettingsForm() {
	const trimmedName = settingsNameInput.value.trim();
	const hasName = trimmedName.length > 0;
	saveProfileButton.disabled = !hasName;
	settingsNameInput.setAttribute('aria-invalid', hasName ? 'false' : 'true');
}

function logOutUser() {
	savedProfile.authenticated = false;
	savedProfile.name = '';
	savedProfile.email = '';
	localStorage.setItem('numeris-profile', JSON.stringify(savedProfile));
	saveProfileToDatabase();
	profileNameInput.value = '';
	authNameInput.value = '';
	authEmailInput.value = '';
	authPasswordInput.value = '';
	appShell.hidden = true;
	authShell.hidden = false;
	closeSettings();
	setAuthMode('login');
	updateProfileDisplay();
}

function shuffle(items) {
	return [...items].sort(() => Math.random() - 0.5);
}

function getSelectedSubjects() {
	return [...subjectOptions.querySelectorAll('input:checked')].map((input) => input.value);
}

function renderSubjectOptions() {
	subjects.forEach((subject) => {
		const subjectQuestionCount = questions.filter((question) => question.subject === subject).length;
		const subjectLabel = document.createElement('label');
		subjectLabel.className = 'topic-option';
		subjectLabel.innerHTML = `<input type="checkbox" value="${subject}"><span class="topic-box">&#10003;</span><span class="subject-copy"><strong>${subject}</strong><small>${subjectQuestionCount} available</small></span>`;
		subjectLabel.querySelector('input').addEventListener('change', () => {
			subjectLabel.classList.toggle('selected', subjectLabel.querySelector('input').checked);
		renderTopicOptions();
		updateQuestionAvailability();
	});
		subjectOptions.appendChild(subjectLabel);
	});
}

function renderTopicOptions() {
	const selectedSubjects = getSelectedSubjects();
	const visibleTopics = [...new Map(questions.filter((question) => selectedSubjects.includes(question.subject)).map((question) => [`${question.subject}::${question.topic}`, question])).values()];
	topicOptions.innerHTML = '';
	visibleTopics.forEach((topicQuestion) => {
		const topicKey = `${topicQuestion.subject}::${topicQuestion.topic}`;
		const topicQuestionCount = questions.filter((question) => question.subject === topicQuestion.subject && question.topic === topicQuestion.topic).length;
		const topicLabel = document.createElement('label');
		topicLabel.className = 'topic-option';
		topicLabel.dataset.subject = topicQuestion.subject;
		topicLabel.dataset.topic = topicQuestion.topic;
		topicLabel.innerHTML = `<input type="checkbox" value="${topicKey}"><span class="topic-box">&#10003;</span><span class="subject-copy"><strong>${topicQuestion.topic}</strong><small>${topicQuestion.subject} · ${topicQuestionCount} available</small></span>`;
		topicLabel.querySelector('input').addEventListener('change', () => {
			topicLabel.classList.toggle('selected', topicLabel.querySelector('input').checked);
			updateQuestionAvailability();
		});
		topicOptions.appendChild(topicLabel);
	});
}

function getSelectedTopics() {
	return [...topicOptions.querySelectorAll('input:checked')].map((input) => input.value);
}

function updateQuestionAvailability() {
	const selectedTopicLabels = [...topicOptions.querySelectorAll('.topic-option.selected')];
	const available = questions.filter((question) => getSelectedSubjects().includes(question.subject) && getSelectedTopics().includes(`${question.subject}::${question.topic}`)).length;
	questionAvailability.textContent = `${available} question${available === 1 ? '' : 's'} available`;
	totalQuestionCount.max = Math.max(1, available);
	countHint.textContent = available > 0 ? `Choose any number from 1 to ${available}.` : 'Choose a subject first.';
}

function orderQuestionsForClass(pool) {
	const randomizedPool = shuffle(pool);
	return randomizedPool.sort((first, second) => {
		const firstAdvanced = first.difficulty === 'Advanced' ? 1 : 0;
		const secondAdvanced = second.difficulty === 'Advanced' ? 1 : 0;
		const firstTechnical = technicalTopics.has(first.topic) ? 1 : 0;
		const secondTechnical = technicalTopics.has(second.topic) ? 1 : 0;
		if (selectedClass === 'Foundation') return firstAdvanced - secondAdvanced || firstTechnical - secondTechnical;
		if (selectedClass === 'Advanced') return secondAdvanced - firstAdvanced || secondTechnical - firstTechnical;
		return firstAdvanced - secondAdvanced;
	});
}

function updateLiveScoreboard() {
	const answeredCount = selectedAnswers.filter((answer) => answer !== null).length;
	const currentCorrect = selectedAnswers.reduce((total, answer, index) => {
		if (answer === null || !activeQuestions[index]) return total;
		return total + (answer === activeQuestions[index].answer ? 1 : 0);
	}, 0);
	const totalQuestions = activeQuestions.length || 0;

	liveScore.textContent = String(currentCorrect);
	liveCorrect.textContent = String(currentCorrect);
	liveAnswered.textContent = `${answeredCount} / ${totalQuestions}`;
}

function renderQuestion() {
	const current = activeQuestions[currentQuestion];
	const selectedAnswer = selectedAnswers[currentQuestion];
	const isAnswered = selectedAnswer !== null;
	const isCorrect = isAnswered && selectedAnswer === current.answer;

	updateLiveScoreboard();
	questionNumber.textContent = String(currentQuestion + 1).padStart(2, '0');
	questionIndex.textContent = `Question ${currentQuestion + 1} of ${activeQuestions.length}`;
	topicTag.textContent = current.topic;
	questionText.textContent = current.question;
	progressBar.style.width = `${((currentQuestion + 1) / activeQuestions.length) * 100}%`;
	previousButton.disabled = currentQuestion === 0;
	nextButton.innerHTML = currentQuestion === activeQuestions.length - 1 ? 'Finish quiz <span aria-hidden="true">&rarr;</span>' : 'Next question <span aria-hidden="true">&rarr;</span>';
	statusText.textContent = !isAnswered ? 'Choose one answer' : isCorrect ? 'Correct!' : 'Wrong!';
	statusText.className = `status-text${!isAnswered ? '' : isCorrect ? ' correct' : ' wrong'}`;
	answersContainer.innerHTML = '';

	current.options.forEach((option, optionIndex) => {
		const answerButton = document.createElement('button');
		answerButton.type = 'button';
		let answerClassName = `answer-option${selectedAnswer === optionIndex ? ' selected' : ''}`;
		if (isAnswered && optionIndex === current.answer) answerClassName += ' correct';
		if (isAnswered && selectedAnswer === optionIndex && !isCorrect) answerClassName += ' incorrect';
		answerButton.className = answerClassName;
		answerButton.disabled = isAnswered;
		answerButton.setAttribute('role', 'radio');
		answerButton.setAttribute('aria-checked', selectedAnswer === optionIndex ? 'true' : 'false');
		answerButton.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + optionIndex)}</span><span class="answer-text">${option}</span>`;
		answerButton.addEventListener('click', () => {
			if (isAnswered) return;
			selectedAnswers[currentQuestion] = optionIndex;
			renderQuestion();
		});
		answersContainer.appendChild(answerButton);
	});
}

function startQuiz() {
	const selectedSubjects = getSelectedSubjects();
	const selectedTopicLabels = [...topicOptions.querySelectorAll('input[type="checkbox"]:checked')].map((input) => input.closest('.topic-option'));
	const selectedTopics = selectedTopicLabels.map((topicLabel) => ({ subject: topicLabel.dataset.subject, topic: topicLabel.dataset.topic }));
	const requestedCount = Math.floor(Number(totalQuestionCount.value));
	const topicPool = questions.filter((question) => selectedSubjects.includes(question.subject) && selectedTopics.some((selection) => selection.subject === question.subject && selection.topic === question.topic));

	if (!topicPool.length || !Number.isFinite(requestedCount) || requestedCount < 1) {
		questionAvailability.textContent = !topicPool.length ? 'Choose at least one subject and topic' : 'Enter the total number of questions';
		return;
	}

	const actualCount = Math.min(requestedCount, topicPool.length);
	totalQuestionCount.value = actualCount;
	activeQuestions = orderQuestionsForClass(topicPool).slice(0, actualCount);
	selectedAnswers = Array(activeQuestions.length).fill(null);
	currentQuestion = 0;
	setupView.hidden = true;
	quizView.hidden = false;
	resultView.hidden = true;
	progressTrack.hidden = false;
	document.querySelector('#quiz-title').textContent = `${selectedClass} quiz`;
	updateLiveScoreboard();
	renderQuestion();
}

function showResults() {
	const score = selectedAnswers.reduce((total, answer, index) => total + (answer === activeQuestions[index].answer ? 1 : 0), 0);
	const percentage = Math.round((score / activeQuestions.length) * 100);
	savedProfile.scores.push(percentage);
	savedProfile.scores = savedProfile.scores.slice(-20);
	savedProfile.name = profileNameInput.value.trim();
	localStorage.setItem('numeris-profile', JSON.stringify(savedProfile));
	saveProfileToDatabase();
	saveSessionToDatabase({
		name: savedProfile.name,
		score,
		total: activeQuestions.length,
		className: selectedClass,
		percentage
	});
	updateProfileDisplay();
	scoreValue.textContent = score;
	resultTotal.textContent = activeQuestions.length;
	correctionSummary.textContent = `${activeQuestions.length - score} to review`;
	correctionList.innerHTML = '';
	activeQuestions.forEach((question, index) => {
		const isCorrect = selectedAnswers[index] === question.answer;
		const reviewItem = document.createElement('div');
		reviewItem.className = `correction-item${isCorrect ? '' : ' incorrect'}`;
		const selectedText = selectedAnswers[index] === null ? 'Not answered' : question.options[selectedAnswers[index]];
		const answerLabel = isCorrect ? 'Correct' : `Correct: ${question.options[question.answer]}`;
		reviewItem.innerHTML = `<span class="correction-number">${String(index + 1).padStart(2, '0')}</span><span class="correction-question">${question.question}<small class="correction-selected">Your answer: ${selectedText}</small></span><span class="correction-answer"><strong>${answerLabel}</strong>${isCorrect ? 'Great work' : 'Review this'}</span>`;
		correctionList.appendChild(reviewItem);
	});
	resultMessage.textContent = percentage >= 80 ? `Excellent work for a ${selectedClass} session. Your subject knowledge is strong.` : percentage >= 60 ? 'Good effort. A little more practice will sharpen your result.' : 'Keep going. Every attempt is another step toward mastery.';
	quizView.hidden = true;
	resultView.hidden = false;
	progressBar.style.width = '100%';
}

document.querySelectorAll('input[name="class"]').forEach((input) => {
	input.addEventListener('change', () => {
		selectedClass = input.value;
		document.querySelectorAll('.class-option').forEach((option) => option.classList.toggle('selected', option.querySelector('input').checked));
		updateProfileDisplay();
	});
});

startButton.addEventListener('click', startQuiz);

nextButton.addEventListener('click', () => {
	if (selectedAnswers[currentQuestion] === null) {
		statusText.textContent = 'Select an answer to continue';
		answersContainer.classList.remove('shake');
		void answersContainer.offsetWidth;
		answersContainer.classList.add('shake');
		return;
	}
	if (currentQuestion === activeQuestions.length - 1) {
		showResults();
	} else {
		currentQuestion += 1;
		renderQuestion();
	}
});

previousButton.addEventListener('click', () => {
	if (currentQuestion > 0) {
		currentQuestion -= 1;
		renderQuestion();
	}
});

restartButton.addEventListener('click', () => {
	currentQuestion = 0;
	selectedAnswers = Array(activeQuestions.length).fill(null);
	quizView.hidden = false;
	resultView.hidden = true;
	renderQuestion();
});

function returnHome() {
	setupView.hidden = false;
	quizView.hidden = true;
	resultView.hidden = true;
	progressTrack.hidden = true;
	questionNumber.textContent = 'Setup';
	document.querySelector('#quiz-title').textContent = 'Build your quiz';
}

changeSettingsButton.addEventListener('click', returnHome);
homeButton.addEventListener('click', returnHome);

profileNameInput.value = savedProfile.name || '';
profileNameInput.addEventListener('input', saveProfile);

settingsButton.addEventListener('click', () => {
	if (settingsPanel.hidden) {
		openSettings();
	} else {
		closeSettings();
	}
});
settingsClose.addEventListener('click', closeSettings);
settingsPanel.addEventListener('click', (event) => {
	if (event.target.dataset.closeSettings === 'true') closeSettings();
});
document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape' && !settingsPanel.hidden) {
		closeSettings();
	}
});
settingsNameInput.addEventListener('input', syncSettingsForm);
settingsEmailInput.addEventListener('input', () => {
	settingsForm.dataset.dirty = 'true';
});
settingsForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const nextName = settingsNameInput.value.trim();
	if (!nextName) {
		syncSettingsForm();
		settingsNameInput.focus();
		return;
	}
	savedProfile.name = nextName;
	savedProfile.email = settingsEmailInput.value.trim();
	profileNameInput.value = savedProfile.name;
	localStorage.setItem('numeris-profile', JSON.stringify(savedProfile));
	saveProfileToDatabase();
	closeSettings();
	updateProfileDisplay();
});
editProfileButton.addEventListener('click', () => {
	openSettings();
	window.setTimeout(() => settingsNameInput.focus(), 50);
});
cancelSettingsButton.addEventListener('click', closeSettings);
logoutButton.addEventListener('click', logOutUser);

authNameInput.value = '';
loginTab.addEventListener('click', () => setAuthMode('login'));
signupTab.addEventListener('click', () => setAuthMode('signup'));
authForm.addEventListener('submit', async (event) => {
	event.preventDefault();
	const name = authNameInput.value.trim();
	let email = normalizeEmail(authEmailInput.value);
	const password = authPasswordInput.value.trim();

	if (!name) {
		authNameInput.focus();
		setAuthMessage('Please add your name before continuing.', true);
		return;
	}

	if (!email) {
		email = DEFAULT_ACCOUNT_EMAIL;
		authEmailInput.value = AUTH_ACCOUNT_LABEL;
	}

	if (email !== DEFAULT_ACCOUNT_EMAIL) {
		email = DEFAULT_ACCOUNT_EMAIL;
		authEmailInput.value = AUTH_ACCOUNT_LABEL;
		setAuthMessage('This app is linked to labadeolamiposi@gmail.com.', false);
	}

	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		authEmailInput.focus();
		setAuthMessage('Please enter a valid email address.', true);
		return;
	}

	if (password.length < 4) {
		authPasswordInput.focus();
		setAuthMessage('Password must be at least 4 characters long.', true);
		return;
	}

	await ensureDefaultAccount();
	const existingUser = await getUserByEmail(email);

	if (authMode === 'signup') {
		try {
			const data = await apiRequest('/auth/register', {
				email,
				name,
				password,
				provider: 'email'
			}, 'POST');
			if (data && data.user) {
				setAuthMessage('Signup complete. Redirecting to your dashboard...');
				completeAuthSession(data.user.name || name, data.user.email || email, data.user.provider || 'email');
				return;
			}
		} catch (error) {
			console.warn('Signup API failed:', error);
		}

		const savedUser = await saveUserAccount({
			email,
			name,
			password,
			provider: 'email'
		});
		if (!savedUser) {
			setAuthMessage('Signup could not be saved. Please try again.', true);
			return;
		}
		setAuthMessage('Signup complete. Redirecting to your dashboard...');
		completeAuthSession(savedUser.name || name, savedUser.email || email, savedUser.provider || 'email');
		return;
	}

	if (!existingUser) {
		setAuthMessage('No account was found for labadeolamiposi@gmail.com. Please sign up first.', true);
		return;
	}

	try {
		const data = await apiRequest('/auth/login', {
			email,
			password
		}, 'POST');
		if (data && data.user) {
			setAuthMessage('Login successful. Opening your dashboard...');
			completeAuthSession(data.user.name || name, data.user.email || email, data.user.provider || 'email');
			return;
		}
	} catch (error) {
		console.warn('Login API failed:', error);
		setAuthMessage(error.message || 'Login failed.', true);
		return;
	}

	if (existingUser.password !== password) {
		setAuthMessage('Incorrect password for this account.', true);
		return;
	}

	setAuthMessage('Login successful. Opening your dashboard...');
	completeAuthSession(existingUser.name || name, existingUser.email || email, existingUser.provider || 'email');
});
googleAuth.addEventListener('click', async () => {
	await continueWithProvider('Google');
});
facebookAuth.addEventListener('click', async () => {
	await continueWithProvider('Facebook');
});

renderSubjectOptions();
renderTopicOptions();
updateQuestionAvailability();
updateProfileDisplay();

setTimeout(() => {
	splashScreen.hidden = true;
	authShell.hidden = false;
	if (savedProfile.name) authNameInput.focus();
}, 1500);
