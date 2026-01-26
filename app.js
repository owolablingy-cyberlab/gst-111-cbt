console.log("App loaded.");

// ================= THE DATA BANK (ALL QUESTIONS) =================
const courseData = {
    // === GST 111 (100 Questions) ===
    "gst111": [
        { id: 1, text: "Phonology is often described as the study of:", options: { a: "Word meanings", b: "Sentence structure", c: "The sound system of a language", d: "Letter formation" }, correct: "c" },
        { id: 2, text: "Phonetics focuses on the study of:", options: { a: "Written symbols", b: "Speech sounds", c: "Grammar rules", d: "Sentence meaning" }, correct: "b" },
        { id: 3, text: "The smallest unit of sound in a language is known as a:", options: { a: "Morpheme", b: "Phoneme", c: "Syllable", d: "Lexeme" }, correct: "b" },
        { id: 4, text: "Which of the following best defines a vowel sound?", options: { a: "Complete closure", b: "Partial closure", c: "Without obstruction of airflow", d: "Produced through nose" }, correct: "c" },
        { id: 5, text: "The vowel sound /iː/ is found in which word?", options: { a: "Sit", b: "Beat", c: "Set", d: "Bat" }, correct: "b" },
        { id: 6, text: "The sound /æ/ occurs in which word?", options: { a: "Man", b: "Moon", c: "Meat", d: "Note" }, correct: "a" },
        { id: 7, text: "Diphthongs are vowel sounds that involve:", options: { a: "One fixed tongue position", b: "Two vowel sounds gliding into one another", c: "Consonant and vowel combination", d: "Nasal airflow" }, correct: "b" },
        { id: 8, text: "The diphthong /aɪ/ occurs in which word?", options: { a: "Boy", b: "Buy", c: "Cow", d: "Go" }, correct: "b" },
        { id: 9, text: "Which of the following contains the diphthong /eɪ/?", options: { a: "Bed", b: "Say", c: "Sit", d: "Cot" }, correct: "b" },
        { id: 10, text: "Long vowels in phonetic transcription are usually indicated by:", options: { a: "Capital letters", b: "A stress mark", c: "A length mark (:)", d: "A hyphen" }, correct: "c" },
        { id: 11, text: "Stress refers to the:", options: { a: "Speed of pronunciation", b: "Emphasis placed on a syllable", c: "Meaning of a word", d: "Pitch of a sentence" }, correct: "b" },
        { id: 12, text: "In English, stressed syllables are produced with:", options: { a: "Less force", b: "No sound", c: "Greater force", d: "Silence" }, correct: "c" },
        { id: 13, text: "Primary stress is:", options: { a: "The weakest stress", b: "The strongest stress in a word", c: "Found only in sentences", d: "Optional in speech" }, correct: "b" },
        { id: 14, text: "Intonation refers to the:", options: { a: "Arrangement of words", b: "Rise and fall of pitch in speech", c: "Speed of speech", d: "Stress placement" }, correct: "b" },
        { id: 15, text: "A falling intonation is commonly used in:", options: { a: "Yes/No questions", b: "Statements", c: "Incomplete lists", d: "Greetings" }, correct: "b" },
        { id: 16, text: "Rising intonation is typically used in:", options: { a: "Commands", b: "Statements", c: "Yes/No questions", d: "Exclamations" }, correct: "c" },
        { id: 17, text: "In a list, all items except the last usually take:", options: { a: "Falling tune", b: "Rising tune", c: "Flat tune", d: "No tune" }, correct: "b" },
        { id: 18, text: "Which sentence is likely to have a rising tune?", options: { a: "She is coming tomorrow.", b: "Close the door.", c: "Are you ready?", d: "I like rice." }, correct: "c" },
        { id: 19, text: "Stress placement can change the:", options: { a: "Spelling of a word", b: "Meaning of a word", c: "Length of a sentence", d: "Part of speech only." }, correct: "b" },
        { id: 20, text: "The stressed syllable in a word is often louder and:", options: { a: "Shorter", b: "Softer", c: "Longer", d: "Silent" }, correct: "c" },
        { id: 21, text: "Morphology is the study of:", options: { a: "Sentence meaning", b: "Word formation", c: "Speech sounds", d: "Writing systems" }, correct: "b" },
        { id: 22, text: "The smallest unit of meaning in a language is a:", options: { a: "Word", b: "Phoneme", c: "Morpheme", d: "Syllable." }, correct: "c" },
        { id: 23, text: "Which of the following is an example of a free morpheme?", options: { a: "-ness", b: "Un-", c: "Book", d: "-ed" }, correct: "c" },
        { id: 24, text: "A bound morpheme:", options: { a: "Can stand alone", b: "Has meaning only when attached", c: "Is always a word", d: "Is a sentence" }, correct: "b" },
        { id: 25, text: "Inflectional morphemes mainly indicate:", options: { a: "New meanings", b: "Tense, number, and comparison", c: "Word pronunciation", d: "Stress patterns" }, correct: "b" },
        { id: 26, text: "Derivational morphemes are used to:", options: { a: "Change sentence order", b: "Create new words", c: "Show agreement", d: "Mark plural only" }, correct: "b" },
        { id: 27, text: "The prefix “un-” in unhappy expresses:", options: { a: "Tense", b: "Negation", c: "Number", d: "Comparison" }, correct: "b" },
        { id: 28, text: "Suffixes are attached to the:", options: { a: "Beginning of a word", b: "Middle of a word", c: "End of a word", d: "Sound of a word." }, correct: "c" },
        { id: 29, text: "Compounding involves:", options: { a: "Adding prefixes", b: "Adding suffixes", c: "Combining two or more words", d: "Shortening words." }, correct: "c" },
        { id: 30, text: "Which of the following is a compound word?", options: { a: "Happiness", b: "Teacher", c: "Blackboard", d: "Running" }, correct: "c" },
        { id: 31, text: "Syntax is concerned with:", options: { a: "Word meanings", b: "Sentence structure", c: "Speech sounds", d: "Writing skills." }, correct: "b" },
        { id: 32, text: "A simple sentence contains:", options: { a: "One independent clause", b: "Two independent clauses", c: "One dependent clause", d: "No verb." }, correct: "a" },
        { id: 33, text: "A compound sentence consists of:", options: { a: "One clause", b: "Two or more independent clauses", c: "One dependent clause", d: "Only phrases" }, correct: "b" },
        { id: 34, text: "A complex sentence contains:", options: { a: "Only independent clauses", b: "One independent and one or more dependent clauses", c: "No subject", d: "No verb" }, correct: "b" },
        { id: 35, text: "Coordinating conjunctions include all EXCEPT:", options: { a: "And", b: "But", c: "Because", d: "Or." }, correct: "c" },
        { id: 36, text: "Subordinating conjunctions include:", options: { a: "And", b: "Or", c: "But", d: "Because." }, correct: "d" },
        { id: 37, text: "The subject of a sentence is the:", options: { a: "Action performed", b: "Receiver of action", c: "Doer of the action", d: "Description" }, correct: "c" },
        { id: 38, text: "The predicate of a sentence contains the:", options: { a: "Subject only", b: "Verb and its complements", c: "Noun only", d: "Object only." }, correct: "b" },
        { id: 39, text: "In “She wrote a letter,” a letter is the:", options: { a: "Subject", b: "Verb", c: "Direct object", d: "Indirect object" }, correct: "c" },
        { id: 40, text: "An indirect object answers the question:", options: { a: "What?", b: "When?", c: "To whom?", d: "Where?." }, correct: "c" },
        { id: 41, text: "Phonetics studies how speech sounds are produced.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 42, text: "A vowel sound is produced with complete obstruction of airflow.", options: { a: "True", b: "False" }, correct: "b" },
        { id: 43, text: "Diphthongs consist of two vowel sounds gliding together.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 44, text: "Stress has no effect on meaning in English.", options: { a: "True", b: "False" }, correct: "b" },
        { id: 45, text: "Rising intonation is commonly used in Yes/No questions.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 46, text: "A morpheme can be free or bound.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 47, text: "Inflectional morphemes create new words.", options: { a: "True", b: "False" }, correct: "b" },
        { id: 48, text: "Compounding is a process of word formation.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 49, text: "A simple sentence has only one clause.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 50, text: "Syntax studies how words are arranged to form sentences.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 51, text: "Concord in grammar refers to the relationship between:", options: { a: "Words and sounds", b: "Subject and verb", c: "Tense and aspect", d: "Meaning and context" }, correct: "b" },
        { id: 52, text: "In the sentence “She runs every morning,” the verb agrees with the:", options: { a: "Object", b: "Subject", c: "Adverb", d: "Predicate" }, correct: "b" },
        { id: 53, text: "Which sentence demonstrates correct subject–verb concord?", options: { a: "The boy run fast.", b: "The boys runs fast.", c: "The boy runs fast.", d: "The boys runned fast." }, correct: "c" },
        { id: 54, text: "When the subject is singular, the verb should be:", options: { a: "Plural", b: "Past", c: "Singular", d: "Continuous." }, correct: "c" },
        { id: 55, text: "A collective noun may take a singular or plural verb depending on:", options: { a: "Spelling", b: "Meaning in context", c: "Length of the sentence", d: "Tense." }, correct: "b" },
        { id: 56, text: "In “The team are arguing among themselves,” the verb is plural because the team is seen as:", options: { a: "One unit", b: "Individuals", c: "An object", d: "A place." }, correct: "b" },
        { id: 57, text: "Words like each, everyone, and someone take a:", options: { a: "Plural verb", b: "Singular verb", c: "Past verb", d: "Continuous verb." }, correct: "b" },
        { id: 58, text: "In the sentence “Neither of the answers is correct,” the verb agrees with:", options: { a: "Answers", b: "Neither", c: "Correct", d: "Of." }, correct: "b" },
        { id: 59, text: "When two singular nouns are joined by and, the verb is usually:", options: { a: "Singular", b: "Plural", c: "Past", d: "Optional." }, correct: "b" },
        { id: 60, text: "When two nouns refer to the same person or thing, the verb is:", options: { a: "Plural", b: "Singular", c: "Continuous", d: "Perfect." }, correct: "b" },
        { id: 61, text: "A noun is a word that names a:", options: { a: "Action", b: "Quality", c: "Person, place, or thing", d: "Description." }, correct: "c" },
        { id: 62, text: "Which of the following is a verb?", options: { a: "Beauty", b: "Quickly", c: "Run", d: "Happy." }, correct: "c" },
        { id: 63, text: "Adjectives are used to describe:", options: { a: "Verbs", b: "Nouns", c: "Pronouns only", d: "Conjunctions." }, correct: "b" },
        { id: 64, text: "Which word is an adverb?", options: { a: "Care", b: "Careful", c: "Carefully", d: "Caring." }, correct: "c" },
        { id: 65, text: "Pronouns are used to replace:", options: { a: "Verbs", b: "Adverbs", c: "Nouns", d: "Adjectives." }, correct: "c" },
        { id: 66, text: "Which of the following is a conjunction?", options: { a: "And", b: "Very", c: "Quickly", d: "Teacher." }, correct: "a" },
        { id: 67, text: "Prepositions show the relationship between a noun and:", options: { a: "A verb", b: "Another word in the sentence", c: "A sentence", d: "A paragraph." }, correct: "b" },
        { id: 68, text: "Which sentence contains a preposition?", options: { a: "She sings beautifully.", b: "The book is on the table.", c: "He runs fast.", d: "They laughed loudly." }, correct: "b" },
        { id: 69, text: "An interjection expresses:", options: { a: "Action", b: "Emotion", c: "Description", d: "Time" }, correct: "b" },
        { id: 70, text: "Words like oh!, wow!, and alas! are examples of:", options: { a: "Conjunctions", b: "Adverbs", c: "Interjections", d: "Prepositions." }, correct: "c" },
        { id: 71, text: "A declarative sentence is used to:", options: { a: "Ask a question", b: "Give a command", c: "Make a statement", d: "Express emotion." }, correct: "c" },
        { id: 72, text: "An interrogative sentence usually ends with a:", options: { a: "Full stop", b: "Comma", c: "Question mark", d: "Exclamation mark." }, correct: "c" },
        { id: 73, text: "Imperative sentences are used to:", options: { a: "Ask questions", b: "Give commands or requests", c: "Make statements", d: "Describe nouns." }, correct: "b" },
        { id: 74, text: "An exclamatory sentence expresses:", options: { a: "Time", b: "Emotion or strong feeling", c: "Place", d: "Agreement." }, correct: "b" },
        { id: 75, text: "Which sentence is imperative?", options: { a: "She is coming tomorrow.", b: "Are you ready?", c: "Close the door.", d: "What a beautiful day!" }, correct: "c" },
        { id: 76, text: "Which punctuation mark is commonly used with exclamatory sentences?", options: { a: "Full stop", b: "Comma", c: "Question mark", d: "Exclamation mark." }, correct: "d" },
        { id: 77, text: "Sentence functions help convey the speaker’s:", options: { a: "Handwriting", b: "Intention", c: "Accent", d: "Speed." }, correct: "b" },
        { id: 78, text: "A question that does not require an answer is called a:", options: { a: "Direct question", b: "Rhetorical question", c: "Indirect question", d: "Tag question." }, correct: "b" },
        { id: 79, text: "Tag questions are used mainly to:", options: { a: "Give information", b: "Emphasize commands", c: "Seek confirmation", d: "Change tense." }, correct: "c" },
        { id: 80, text: "In “You are coming, aren’t you?” the tag question is used to:", options: { a: "Command", b: "Insult", c: "Confirm information", d: "End the sentence" }, correct: "c" },
        { id: 81, text: "Concord ensures agreement between subject and verb.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 82, text: "Collective nouns always take plural verbs.", options: { a: "True", b: "False" }, correct: "b" },
        { id: 83, text: "Everyone and somebody take plural verbs.", options: { a: "True", b: "False" }, correct: "b" },
        { id: 84, text: "Adjectives can modify nouns.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 85, text: "Adverbs can modify verbs, adjectives, and other adverbs.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 86, text: "Prepositions usually show position or direction.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 87, text: "Imperative sentences usually have a stated subject.", options: { a: "True", b: "False" }, correct: "b" },
        { id: 88, text: "Declarative sentences make statements.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 89, text: "Interjections express emotion.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 90, text: "Tag questions are used to seek confirmation.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 91, text: "Effective communication depends on clarity and:", options: { a: "Speed", b: "Accuracy", c: "Noise", d: "Volume." }, correct: "b" },
        { id: 92, text: "Grammar helps speakers convey meaning more:", options: { a: "Confusingly", b: "Clearly", c: "Slowly", d: "Loudly." }, correct: "b" },
        { id: 93, text: "The primary purpose of language is to:", options: { a: "Decorate speech", b: "Communicate ideas", c: "Confuse listeners", d: "Memorize rules." }, correct: "b" },
        { id: 94, text: "Formal English is commonly used in:", options: { a: "Text messages", b: "Academic writing", c: "Casual conversations", d: "Social media chats." }, correct: "b" },
        { id: 95, text: "Informal English is suitable for:", options: { a: "Official letters", b: "Examination scripts", c: "Friendly conversations", d: "Legal documents." }, correct: "c" },
        { id: 96, text: "Register refers to language variation according to:", options: { a: "Sound", b: "Situation and context", c: "Alphabet", d: "Spelling." }, correct: "b" },
        { id: 97, text: "Academic English is usually:", options: { a: "Casual and emotional", b: "Structured and objective", c: "Slang-filled", d: "Personal." }, correct: "b" },
        { id: 98, text: "Choice of words in communication should suit the:", options: { a: "Speaker only", b: "Listener and situation", c: "Grammar rules only", d: "Length of sentence" }, correct: "b" },
        { id: 99, text: "Good command of English improves:", options: { a: "Guessing ability", b: "Communication skills", c: "Memorization", d: "Accent only." }, correct: "b" },
        { id: 100, text: "Language is best described as a system of:", options: { a: "Random sounds", b: "Symbols used for communication", c: "Letters only", d: "Rules without meaning" }, correct: "b" }
    ],

    // === CSC 101 (200 Questions) ===
    "csc101": [
        { id: 1, text: "According to the definition of a computer, what is the primary distinction of the 'Processing' stage?", options: { a: "Displaying results", b: "Transforming data into information", c: "Entering raw facts", d: "Storing files" }, correct: "b" },
        { id: 2, text: "The Abacus, used 2000 years ago, is described in your notes as the foundation for:", options: { a: "Digital processing", b: "Electronic processing", c: "Manual data processing", d: "Hybrid processing" }, correct: "c" },
        { id: 3, text: "Blaise Pascal’s 1642 invention used which specific mechanism for calculation?", options: { a: "Stepped gears", b: "Vacuum tubes", c: "Wheels and gears", d: "Magnetic drums" }, correct: "c" },
        { id: 4, text: "Why was the Leibniz Calculator (1694) considered superior to the Pascaline?", options: { a: "It used electricity", b: "It could multiply and divide", c: "It was smaller", d: "It had a screen" }, correct: "b" },
        { id: 5, text: "Charles Xavier Thomas is credited with what milestone in the 19th century?", options: { a: "Inventing the Abacus", b: "Creating the first commercial mechanical calculator", c: "Discovering the transistor", d: "Writing the first OS" }, correct: "b" },
        { id: 6, text: "First-generation computers (1940-1956) are defined by the use of:", options: { a: "Transistors", b: "Integrated Circuits", c: "Vacuum Tubes", d: "Silicon Chips" }, correct: "c" },
        { id: 7, text: "Which of the following was a primary disadvantage of the First Generation vacuum tubes?", options: { a: "They were too cheap", b: "They generated excessive heat", c: "They were too small to see", d: "They used AI" }, correct: "b" },
        { id: 8, text: "The ENIAC and UNIVAC are classic examples of which generation?", options: { a: "First", b: "Second", c: "Third", d: "Fourth" }, correct: "a" },
        { id: 9, text: "Which generation of computers introduced the use of 'Machine Language' for programming?", options: { a: "First", b: "Third", c: "Fifth", d: "Fourth" }, correct: "a" },
        { id: 10, text: "The transition to the Second Generation (1956-1963) was marked by the invention of:", options: { a: "The Microprocessor", b: "The Transistor", c: "The Abacus", d: "The Internet" }, correct: "b" },
        { id: 11, text: "What software advancement occurred in the Second Generation?", options: { a: "Windows 11", b: "Machine language only", c: "COBOL and FORTRAN", d: "Artificial Intelligence" }, correct: "c" },
        { id: 12, text: "Third-generation computers (1964-1971) utilized 'IC.' What does IC stand for?", options: { a: "Internal Circuit", b: "Integrated Circuit", c: "Intelligent Computer", d: "Input Center" }, correct: "b" },
        { id: 13, text: "How did the Third Generation change how users interacted with computers?", options: { a: "Keyboards and monitors replaced punched cards", b: "Voice command was used", c: "Only punch cards were used", d: "No interface was needed" }, correct: "a" },
        { id: 14, text: "The 'Microprocessor' is the defining technology of which generation?", options: { a: "Second", b: "Third", c: "Fourth", d: "Fifth" }, correct: "c" },
        { id: 15, text: "VLSI technology allowed for:", options: { a: "One transistor per room", b: "Thousands of transistors on one chip", c: "Mechanical gears to move faster", d: "Computers to work without power" }, correct: "b" },
        { id: 16, text: "Fifth-generation computers are fundamentally based on:", options: { a: "Manual processing", b: "Parallel processing and AI", c: "Vacuum tubes", d: "Steam power" }, correct: "b" },
        { id: 17, text: "In the context of 'Types,' a computer that represents data as physical quantities is:", options: { a: "Digital", b: "Analogue", c: "Special Purpose", d: "Mainframe" }, correct: "b" },
        { id: 18, text: "Which device is an example of an Analogue computer?", options: { a: "A modern Laptop", b: "A simple Speedometer", c: "A Smartphone", d: "An Apple Watch" }, correct: "b" },
        { id: 19, text: "A 'Digital' computer processes data in the form of:", options: { a: "Continuous signals", b: "Discrete 0s and 1s", c: "Only letters", d: "Magnetic waves" }, correct: "b" },
        { id: 20, text: "Why would a hospital use a 'Hybrid' computer?", options: { a: "To save money", b: "To measure heartbeat (analogue) and convert it to digits", c: "To play games", d: "To replace doctors" }, correct: "b" },
        { id: 21, text: "Classification by 'Purpose' divides computers into:", options: { a: "Big and Small", b: "General and Special", c: "Old and New", d: "Fast and Slow" }, correct: "b" },
        { id: 22, text: "An ATM is best described as a:", options: { a: "General Purpose Computer", b: "Special Purpose Computer", c: "Supercomputer", d: "Analogue machine" }, correct: "b" },
        { id: 23, text: "Which computer size is designed for massive scientific research like weather forecasting?", options: { a: "Micro-computer", b: "Minicomputer", c: "Supercomputer", d: "Mainframe" }, correct: "c" },
        { id: 24, text: "Mainframes are typically used by:", options: { a: "Students for homework", b: "Large organizations like banks", c: "Small kiosks", d: "Individual gamers" }, correct: "b" },
        { id: 25, text: "'Minicomputers' are often called mid-range servers because:", options: { a: "They are average speed", b: "They support multiple users but are smaller than mainframes", c: "They are only used in the middle of the day", d: "They have no RAM" }, correct: "b" },
        { id: 26, text: "Your smartphone is technically a:", options: { a: "Mainframe", b: "Micro-computer", c: "Special Purpose Analogue", d: "Supercomputer" }, correct: "b" },
        { id: 27, text: "The characteristic 'Speed' refers to a computer's ability to:", options: { a: "Move physically fast", b: "Perform millions of instructions per second", c: "Turn on instantly", d: "Connect to the internet" }, correct: "b" },
        { id: 28, text: "Which characteristic ensures a computer doesn't make mistakes if the input is correct?", options: { a: "Diligence", b: "Accuracy", c: "Versatility", d: "Storage" }, correct: "b" },
        { id: 29, text: "'Diligence' means the computer:", options: { a: "Is very smart", b: "Does not suffer from boredom or tiredness", c: "Can store movies", d: "Can talk" }, correct: "b" },
        { id: 30, text: "The ability of a computer to perform different types of tasks (typing, music, math) is:", options: { a: "Storage", b: "Versatility", c: "Speed", d: "Accuracy" }, correct: "b" },
        { id: 31, text: "'Memory capability' refers to:", options: { a: "How much a computer remembers from history", b: "The amount of data it can store", c: "The size of the screen", d: "The weight of the CPU" }, correct: "b" },
        { id: 32, text: "Which of the following is NOT a characteristic of a computer?", options: { a: "Speed", b: "Storage", c: "Human Intuition", d: "Accuracy" }, correct: "c" },
        { id: 33, text: "The term 'GIGO' stands for:", options: { a: "Gold In Gold Out", b: "Garbage In Garbage Out", c: "General Input General Output", d: "Gear In Gear Out" }, correct: "b" },
        { id: 34, text: "A computer is 'Electronic' because it:", options: { a: "Uses a battery", b: "Uses electronic circuits and components", c: "Needs a person to use it", d: "Is made of plastic" }, correct: "b" },
        { id: 35, text: "The Abacus was first used in:", options: { a: "America", b: "The Orient (Asia)", c: "Africa", d: "Europe" }, correct: "b" },
        { id: 36, text: "John Napier is famous for creating:", options: { a: "The Transistor", b: "Napier’s Bones (logs)", c: "The Mouse", d: "Windows OS" }, correct: "b" },
        { id: 37, text: "The 'Analytical Engine' was designed by:", options: { a: "Charles Babbage", b: "Bill Gates", c: "Steve Jobs", d: "Blaise Pascal" }, correct: "a" },
        { id: 38, text: "Which component is known as the 'Building Block' of the Third Generation?", options: { a: "The Silicon Chip", b: "The Copper Wire", c: "The Iron Plate", d: "The Glass Tube" }, correct: "a" },
        { id: 39, text: "Portability became a reality in which generation?", options: { a: "First", b: "Second", c: "Third", d: "Fourth" }, correct: "d" },
        { id: 40, text: "A computer used for 'General Purpose' can:", options: { a: "Only do one thing", b: "Be programmed for various unrelated tasks", c: "Only work in a lab", d: "Only do math" }, correct: "b" },
        { id: 41, text: "Which computer type is usually the most expensive?", options: { a: "Micro-computer", b: "Supercomputer", c: "Calculator", d: "Laptop" }, correct: "b" },
        { id: 42, text: "'Data' can be described as:", options: { a: "The final report", b: "Raw facts and figures", c: "The computer screen", d: "The user" }, correct: "b" },
        { id: 43, text: "What is the result of processed data?", options: { a: "More data", b: "Information", c: "Hardware", d: "Storage" }, correct: "b" },
        { id: 44, text: "The CPU stands for:", options: { a: "Central Processing Unit", b: "Computer Power Unit", c: "Control Processing User", d: "Core Program Utility" }, correct: "a" },
        { id: 45, text: "Which part of the CPU is the 'Calculator'?", options: { a: "Control Unit", b: "ALU", c: "RAM", d: "Hard Disk" }, correct: "b" },
        { id: 46, text: "The 'Brain' of the computer is the:", options: { a: "Monitor", b: "Keyboard", c: "CPU", d: "Printer" }, correct: "c" },
        { id: 47, text: "How many generations of computers are generally recognized in your notes?", options: { a: "Three", b: "Five", c: "Ten", d: "Two" }, correct: "b" },
        { id: 48, text: "In the 1st Generation, how was data fed into the computer?", options: { a: "Mouse", b: "Punched cards", c: "Voice", d: "Touchscreen" }, correct: "b" },
        { id: 49, text: "Integrated Circuits led to a decrease in:", options: { a: "Speed", b: "Size and Cost", c: "Efficiency", d: "Memory" }, correct: "b" },
        { id: 50, text: "Artificial Intelligence aims to make computers:", options: { a: "Heavier", b: "Think and learn like humans", c: "Use more power", d: "Only work for robots" }, correct: "b" },
        { id: 51, text: "Hardware is defined as the ______ components of a computer system.", options: { a: "Logical", b: "Tangible", c: "Invisible", d: "Virtual" }, correct: "b" },
        { id: 52, text: "Which component is responsible for retrieving and executing instructions?", options: { a: "Monitor", b: "CPU", c: "RAM", d: "Scanner" }, correct: "b" },
        { id: 53, text: "The Arithmetic Logic Unit (ALU) performs which of the following?", options: { a: "Data storage", b: "Logical comparisons", c: "Coordination of signals", d: "Booting" }, correct: "b" },
        { id: 54, text: "The Control Unit (CU) communicates with which part of the computer to manage data flow?", options: { a: "Input/Output and Memory", b: "Only the printer", c: "Only the mouse", d: "The plastic casing" }, correct: "a" },
        { id: 55, text: "Within the CPU, where is data held immediately during processing?", options: { a: "Hard Disk", b: "Registers", c: "ROM", d: "Cloud" }, correct: "b" },
        { id: 56, text: "Primary memory is also known as:", options: { a: "Secondary storage", b: "Main memory", c: "Auxiliary memory", d: "External memory" }, correct: "b" },
        { id: 57, text: "Which memory is temporary and volatile?", options: { a: "ROM", b: "Hard Disk", c: "RAM", d: "DVD" }, correct: "c" },
        { id: 58, text: "ROM stands for:", options: { a: "Random Only Memory", b: "Read Only Memory", c: "Real Output Memory", d: "Read On Memory" }, correct: "b" },
        { id: 59, text: "Which type of memory contains the permanent 'Start-up' instructions?", options: { a: "RAM", b: "ROM", c: "Registers", d: "Cache" }, correct: "b" },
        { id: 60, text: "What happens to data in RAM when the computer is turned off?", options: { a: "It is saved to the CPU", b: "It is lost", c: "It becomes ROM", d: "It prints automatically" }, correct: "b" },
        { id: 61, text: "Secondary storage is ________ in nature.", options: { a: "Volatile", b: "Temporary", c: "Non-volatile", d: "Electronic only" }, correct: "c" },
        { id: 62, text: "Which of these is an example of secondary storage?", options: { a: "ALU", b: "RAM", c: "Magnetic Disk", d: "Control Unit" }, correct: "c" },
        { id: 63, text: "The smallest unit of information in a computer is:", options: { a: "Byte", b: "Nibble", c: "Bit", d: "Kilobyte" }, correct: "c" },
        { id: 64, text: "How many bits are in one 'Nibble'?", options: { a: "2", b: "4", c: "8", d: "16" }, correct: "b" },
        { id: 65, text: "One Megabyte (MB) is equal to:", options: { a: "1024 Bits", b: "1024 Kilobytes", c: "1024 Gigabytes", d: "8 Bytes" }, correct: "b" },
        { id: 66, text: "Which unit is larger than a Gigabyte?", options: { a: "Megabyte", b: "Terabyte", c: "Kilobyte", d: "Bit" }, correct: "b" },
        { id: 67, text: "The physical connection between the CPU and memory is called a:", options: { a: "Road", b: "Bus", c: "Wire", d: "Pipe" }, correct: "b" },
        { id: 68, text: "Which part of the CPU acts as the 'Traffic Cop'?", options: { a: "ALU", b: "Registers", c: "Control Unit", d: "RAM" }, correct: "c" },
        { id: 69, text: "'Main Memory' is directly accessible by the:", options: { a: "Printer", b: "CPU", c: "Keyboard", d: "User's hand" }, correct: "b" },
        { id: 70, text: "Which of these has the fastest access speed?", options: { a: "Hard Disk", b: "RAM", c: "CD-ROM", d: "Floppy Disk" }, correct: "b" },
        { id: 71, text: "A computer's 'Word Size' refers to:", options: { a: "The length of a sentence", b: "The number of bits a CPU processes at once", c: "The font size", d: "The RAM capacity" }, correct: "b" },
        { id: 72, text: "Which storage is typically used for backups?", options: { a: "Registers", b: "Magnetic Tape", c: "RAM", d: "ROM" }, correct: "b" },
        { id: 73, text: "'Volatile' memory means:", options: { a: "It is very fast", b: "It is unstable and explodes", c: "It requires power to keep data", d: "It is permanent" }, correct: "c" },
        { id: 74, text: "The CPU's clock speed is measured in:", options: { a: "Meters", b: "Hertz (Hz)", c: "Liters", d: "Bits" }, correct: "b" },
        { id: 75, text: "Which is NOT a component of the CPU?", options: { a: "ALU", b: "Control Unit", c: "Hard Drive", d: "Registers" }, correct: "c" },
        { id: 76, text: "A peripheral device is:", options: { a: "Inside the CPU only", b: "Any device connected to the system unit", c: "Only for games", d: "Only a monitor" }, correct: "b" },
        { id: 77, text: "The most common input device is the:", options: { a: "Plotter", b: "Keyboard", c: "Speaker", d: "Printer" }, correct: "b" },
        { id: 78, text: "Function keys on a keyboard are labeled:", options: { a: "A1-A12", b: "F1-F12", c: "1-12", d: "Alt-F1" }, correct: "b" },
        { id: 79, text: "Which mouse action usually opens a program?", options: { a: "Single click", b: "Double click", c: "Right click", d: "Dragging" }, correct: "b" },
        { id: 80, text: "An 'Optical Mouse' uses ______ to detect movement.", options: { a: "A rubber ball", b: "Light/Lasers", c: "Wheels", d: "Ink" }, correct: "b" },
        { id: 81, text: "Which device is used by architects for high-quality large drawings?", options: { a: "Dot Matrix", b: "Plotter", c: "Inkjet", d: "Scanner" }, correct: "b" },
        { id: 82, text: "A flat-bed scanner is used to:", options: { a: "Print photos", b: "Input images into a computer", c: "Record sound", d: "Clean the screen" }, correct: "b" },
        { id: 83, text: "Which input device is best for playing flight simulator games?", options: { a: "Mouse", b: "Keyboard", c: "Joystick", d: "Scanner" }, correct: "c" },
        { id: 84, text: "'Touch screens' are unique because they are:", options: { a: "Only output", b: "Only input", c: "Both input and output", d: "Neither" }, correct: "c" },
        { id: 85, text: "An OMR is specifically used for:", options: { a: "Reading barcodes", b: "Reading pencil marks on exam sheets", c: "Scanning fingerprints", d: "Printing checks" }, correct: "b" },
        { id: 86, text: "MICR technology is most commonly found in:", options: { a: "Schools", b: "Banks", c: "Supermarkets", d: "Hospitals" }, correct: "b" },
        { id: 87, text: "A barcode reader uses ______ to read data.", options: { a: "Sound", b: "Light/Laser", c: "Touch", d: "Heat" }, correct: "b" },
        { id: 88, text: "Which output device produces a 'Hard Copy'?", options: { a: "Monitor", b: "Speaker", c: "Printer", d: "Projector" }, correct: "c" },
        { id: 89, text: "A 'Soft Copy' refers to:", options: { a: "A paper printout", b: "Data displayed on a screen", c: "A floppy disk", d: "A soft keyboard" }, correct: "b" },
        { id: 90, text: "Resolution of a monitor is measured in:", options: { a: "Inches", b: "Pixels", c: "Colors", d: "Speed" }, correct: "b" },
        { id: 91, text: "Which printer uses a laser beam and dry ink (toner)?", options: { a: "Inkjet", b: "Dot Matrix", c: "Laser Printer", d: "Daisy Wheel" }, correct: "c" },
        { id: 92, text: "An 'Impact Printer' works by:", options: { a: "Spraying ink", b: "Striking a ribbon against paper", c: "Using heat", d: "Using static electricity" }, correct: "b" },
        { id: 93, text: "Which device allows a computer to output sound?", options: { a: "Microphone", b: "Speaker", c: "Scanner", d: "Monitor" }, correct: "b" },
        { id: 94, text: "A 'Trackball' is most similar to which device?", options: { a: "Keyboard", b: "Mouse", c: "Printer", d: "CPU" }, correct: "b" },
        { id: 95, text: "Modern monitors are typically:", options: { a: "CRT", b: "LCD or LED", c: "Vacuum tubes", d: "Mechanical" }, correct: "b" },
        { id: 96, text: "Which device is used for 'Biometric' input?", options: { a: "Mouse", b: "Fingerprint Scanner", c: "Light Pen", d: "OMR" }, correct: "b" },
        { id: 97, text: "A 'Light Pen' is used for:", options: { a: "Lighting up the room", b: "Direct screen interaction/drawing", c: "Typing", d: "Printing" }, correct: "b" },
        { id: 98, text: "Which device would you use to digitize a physical photograph?", options: { a: "Plotter", b: "Scanner", c: "Printer", d: "Monitor" }, correct: "b" },
        { id: 99, text: "The 'Enter' key is also known as the:", options: { a: "Return key", b: "Backspace key", c: "Shift key", d: "Escape key" }, correct: "a" },
        { id: 100, text: "A 'QWERTY' keyboard is named after:", options: { a: "The inventor", b: "The first six letters of the top row", c: "The company", d: "The country" }, correct: "b" },
        { id: 101, text: "Software that manages the basic functions of the computer is:", options: { a: "Application software", b: "System software", c: "Utility software", d: "Game software" }, correct: "b" },
        { id: 102, text: "An Operating System (OS) is an example of:", options: { a: "Hardware", b: "System Software", c: "Application Software", d: "Firmware" }, correct: "b" },
        { id: 103, text: "Which software is used for a specific user task like 'Accounting'?", options: { a: "Windows", b: "Application Software", c: "BIOS", d: "Compiler" }, correct: "b" },
        { id: 104, text: "A 'Word Processor' is used to:", options: { a: "Calculate numbers", b: "Create text documents", c: "Edit videos", d: "Manage hardware" }, correct: "b" },
        { id: 105, text: "'Spreadsheets' are ideal for:", options: { a: "Writing letters", b: "Financial calculations", c: "Drawing", d: "Browsing the web" }, correct: "b" },
        { id: 106, text: "Which program is a 'Utility'?", options: { a: "MS Word", b: "Antivirus", c: "Excel", d: "Photoshop" }, correct: "b" },
        { id: 107, text: "Programming is the process of:", options: { a: "Buying a computer", b: "Writing instructions for the computer", c: "Fixing a broken screen", d: "Surfing the internet" }, correct: "b" },
        { id: 108, text: "Machine language is also called:", options: { a: "1st Generation Language", b: "4th Generation Language", c: "High-level language", d: "Human language" }, correct: "a" },
        { id: 109, text: "Assembly language uses ______ instead of 0s and 1s.", options: { a: "English sentences", b: "Mnemonics (Short codes)", c: "Pictures", d: "Sound" }, correct: "b" },
        { id: 110, text: "Which language is 'Machine Independent'?", options: { a: "Low-level", b: "High-level", c: "Binary", d: "Machine code" }, correct: "b" },
        { id: 111, text: "A Compiler translates:", options: { a: "Line by line", b: "The whole program at once", c: "Only comments", d: "To English" }, correct: "b" },
        { id: 112, text: "An Interpreter is often _______ than a compiler.", options: { a: "Faster", b: "Slower", c: "Larger", d: "More expensive" }, correct: "b" },
        { id: 113, text: "FORTRAN was primarily designed for:", options: { a: "Business", b: "Science/Engineering", c: "Music", d: "Education" }, correct: "b" },
        { id: 114, text: "COBOL stands for:", options: { a: "Common Business Oriented Language", b: "Computer Basic Online Language", c: "Core Business Operating Language", d: "Common Basic Output Logic" }, correct: "a" },
        { id: 115, text: "Which language is often taught to beginners for its simplicity?", options: { a: "Assembly", b: "BASIC", c: "FORTRAN", d: "Machine code" }, correct: "b" },
        { id: 116, text: "4GL stands for:", options: { a: "Four Game Logic", b: "Fourth Generation Language", c: "Four Gigabyte Link", d: "Fourth General Logic" }, correct: "b" },
        { id: 117, text: "Data processing that requires zero machine intervention is:", options: { a: "Manual", b: "Mechanical", c: "Electronic", d: "Hybrid" }, correct: "a" },
        { id: 118, text: "Which method uses computers for data processing?", options: { a: "Manual", b: "Mechanical", c: "Electronic (EDP)", d: "Physical" }, correct: "c" },
        { id: 119, text: "A major disadvantage of manual data processing is:", options: { a: "It is too fast", b: "It is prone to human error", c: "It uses too much electricity", d: "It requires a CPU" }, correct: "b" },
        { id: 120, text: "In the processing cycle, 'Output' is:", options: { a: "Raw facts", b: "Processed information", c: "The mouse", d: "The user" }, correct: "b" },
        { id: 121, text: "The 'Storage' phase allows information to be:", options: { a: "Deleted instantly", b: "Saved for future use", c: "Printed only", d: "Ignored" }, correct: "b" },
        { id: 122, text: "Which software category includes 'Database Management Systems'?", options: { a: "System Software", b: "Application Software", c: "Hardware", d: "Translators" }, correct: "b" },
        { id: 123, text: "A 'Compiler' creates an object file. This is:", options: { a: "The source code", b: "The machine-readable version", c: "A virus", d: "A text document" }, correct: "b" },
        { id: 124, text: "High-level languages use ______ for syntax.", options: { a: "Only 0 and 1", b: "English-like words", c: "Greek letters", d: "Morse code" }, correct: "b" },
        { id: 125, text: "The 'Control Unit' retrieves instructions from:", options: { a: "The printer", b: "Memory", c: "The keyboard", d: "The fan" }, correct: "b" },
        { id: 126, text: "'Accuracy' in computers is dependent on:", options: { a: "The price of the PC", b: "The quality of input data (GIGO)", c: "The color of the monitor", d: "The room temperature" }, correct: "b" },
        { id: 127, text: "Which generation introduced the 'Mouse'?", options: { a: "1st", b: "2nd", c: "3rd", d: "4th" }, correct: "d" },
        { id: 128, text: "Multi-programming was first possible in which generation?", options: { a: "1st", b: "2nd", c: "3rd", d: "5th" }, correct: "c" },
        { id: 129, text: "'Diligence' means a computer:", options: { a: "Thinks for itself", b: "Never gets tired of repetitive work", c: "Is very small", d: "Is very expensive" }, correct: "b" },
        { id: 130, text: "'Data' becomes 'Information' after:", options: { a: "Input", b: "Processing", c: "Storage", d: "Output" }, correct: "b" },
        { id: 131, text: "Which of these is an OS?", options: { a: "Linux", b: "Word", c: "PowerPoint", d: "Chrome" }, correct: "a" },
        { id: 132, text: "Software used to create a slideshow is:", options: { a: "Database", b: "Presentation software", c: "Spreadsheet", d: "Utility" }, correct: "b" },
        { id: 133, text: "Assemblers are used for:", options: { a: "High-level languages", b: "Low-level assembly languages", c: "Making hardware", d: "Printing" }, correct: "b" },
        { id: 134, text: "Which processing method uses a 'Typewriter'?", options: { a: "Manual", b: "Mechanical", c: "Electronic", d: "Digital" }, correct: "b" },
        { id: 135, text: "The main purpose of an OS is to:", options: { a: "Play games", b: "Provide an interface and manage resources", c: "Write code", d: "Clean the disk" }, correct: "b" },
        { id: 136, text: "Which language is the most difficult for a human to write?", options: { a: "BASIC", b: "COBOL", c: "Machine Language", d: "C++" }, correct: "c" },
        { id: 137, text: "Which memory is 'Write once, Read many'?", options: { a: "RAM", b: "ROM", c: "Registers", d: "L1 Cache" }, correct: "b" },
        { id: 138, text: "Which is a characteristic of 5th Gen computers?", options: { a: "Vacuum tubes", b: "Natural Language Processing", c: "Large size", d: "Low speed" }, correct: "b" },
        { id: 139, text: "'Versatility' means the computer can:", options: { a: "Work in a desert", b: "Perform a variety of tasks", c: "Run without power", d: "Be easily broken" }, correct: "b" },
        { id: 140, text: "A computer program is a:", options: { a: "Piece of hardware", b: "Sequence of instructions", c: "Type of cable", d: "Monitor brand" }, correct: "b" },
        { id: 141, text: "Who is the 'Father of Computers'?", options: { a: "Bill Gates", b: "Charles Babbage", c: "Blaise Pascal", d: "John Napier" }, correct: "b" },
        { id: 142, text: "The 'Pascaline' was invented in:", options: { a: "1990", b: "1642", c: "1800", d: "2000" }, correct: "b" },
        { id: 143, text: "Integrated circuits are made on small _______ chips.", options: { a: "Gold", b: "Silicon", c: "Plastic", d: "Wood" }, correct: "b" },
        { id: 144, text: "Which generation used 'Microchips'?", options: { a: "1st", b: "2nd", c: "3rd", d: "4th" }, correct: "d" },
        { id: 145, text: "A 'Supercomputer' is used for:", options: { a: "Browsing Facebook", b: "Complex weather simulations", c: "Typing a letter", d: "Playing Tetris" }, correct: "b" },
        { id: 146, text: "Which of these is an input device?", options: { a: "Speaker", b: "Printer", c: "Scanner", d: "Monitor" }, correct: "c" },
        { id: 147, text: "Which of these is an output device?", options: { a: "Keyboard", b: "Mouse", c: "Plotter", d: "Joystick" }, correct: "c" },
        { id: 148, text: "RAM is used to store:", options: { a: "Permanent BIOS", b: "Programs currently being executed", c: "Backups", d: "The OS installer" }, correct: "b" },
        { id: 149, text: "'Software' can be touched:", options: { a: "True", b: "False" }, correct: "b" },
        { id: 150, text: "A computer is an ______ device.", options: { a: "Manual", b: "Electronic", c: "Biological", d: "Simple" }, correct: "b" },
        { id: 151, text: "Which device used 'Napier’s Bones'?", options: { a: "Pascal", b: "John Napier", c: "Leibniz", d: "Babbage" }, correct: "b" },
        { id: 152, text: "The 2nd Generation used _______ for memory.", options: { a: "Magnetic Cores", b: "Vacuum Tubes", c: "SSD", d: "Paper" }, correct: "a" },
        { id: 153, text: "UNIVAC stands for:", options: { a: "Universal Automatic Computer", b: "United Variable Computer", c: "Universal Analog Center", d: "Unit Value Computer" }, correct: "a" },
        { id: 154, text: "Which is a 'General Purpose' computer?", options: { a: "A digital watch", b: "A Laptop", c: "A car's fuel injector", d: "A microwave timer" }, correct: "b" },
        { id: 155, text: "'Speed' of computers is measured in MIPS. MIPS stands for:", options: { a: "Many Inputs Per Second", b: "Millions of Instructions Per Second", c: "Micro Information Processing System", d: "Main Internal Processing Speed" }, correct: "b" },
        { id: 156, text: "Computers lack 'I.Q.' What does this mean?", options: { a: "They are fast", b: "They cannot think independently without instructions", c: "They have no memory", d: "They are small" }, correct: "b" },
        { id: 157, text: "Which memory is the 'Working Memory'?", options: { a: "ROM", b: "RAM", c: "Hard Drive", d: "CD" }, correct: "b" },
        { id: 158, text: "A 'Bit' can be:", options: { a: "1 or 2", b: "0 or 1", c: "A or B", d: "Up or Down" }, correct: "b" },
        { id: 159, text: "8 bits = 1 _____.", options: { a: "Nibble", b: "Byte", c: "Kilobyte", d: "Megabyte" }, correct: "b" },
        { id: 160, text: "Which key is used to cancel an operation?", options: { a: "Enter", b: "Esc", c: "Shift", d: "Ctrl" }, correct: "b" },
        { id: 161, text: "A 'Mouse' is a ______ device.", options: { a: "Scanning", b: "Pointing", c: "Printing", d: "Storage" }, correct: "b" },
        { id: 162, text: "Which scanner reads 'Barcodes'?", options: { a: "OMR", b: "Barcode Reader", c: "OCR", d: "MICR" }, correct: "b" },
        { id: 163, text: "A 'Monitor' is also called a:", options: { a: "VDU", b: "CPU", c: "ALU", d: "RAM" }, correct: "a" },
        { id: 164, text: "'VDU' stands for:", options: { a: "Visual Display Unit", b: "Variable Data Unit", c: "Video Digital Utility", d: "Visual Data User" }, correct: "a" },
        { id: 165, text: "Which printer uses 'Ink Ribbons'?", options: { a: "Laser", b: "Inkjet", c: "Dot Matrix", d: "Thermal" }, correct: "c" },
        { id: 166, text: "'System Software' includes:", options: { a: "Games", b: "Operating Systems", c: "Word Processors", d: "Browsers" }, correct: "b" },
        { id: 167, text: "'Application Software' includes:", options: { a: "Compilers", b: "Browsers", c: "MS Excel", d: "Windows 10" }, correct: "c" },
        { id: 168, text: "To 'Boot' a computer means to:", options: { a: "Kick it", b: "Start it up", c: "Shut it down", d: "Print a page" }, correct: "b" },
        { id: 169, text: "'Machine Language' is understood directly by the:", options: { a: "User", b: "CPU", c: "Printer", d: "Mouse" }, correct: "b" },
        { id: 170, text: "'Assembly Language' is:", options: { a: "High-level", b: "Low-level", c: "4GL", d: "Natural language" }, correct: "b" },
        { id: 171, text: "A 'Compiler' is:", options: { a: "Hardware", b: "System Software (Translator)", c: "Application Software", d: "A virus" }, correct: "b" },
        { id: 172, text: "'FORTRAN' is best for:", options: { a: "Lawyers", b: "Scientists", c: "Artists", d: "Chefs" }, correct: "b" },
        { id: 173, text: "'COBOL' is best for:", options: { a: "Research", b: "Business", c: "Games", d: "Music" }, correct: "b" },
        { id: 174, text: "Which processing is the fastest?", options: { a: "Manual", b: "Mechanical", c: "Electronic", d: "Physical" }, correct: "c" },
        { id: 175, text: "GIGO stands for 'Garbage In, ______'.", options: { a: "Garbage On", b: "Garbage Out", c: "Gold Out", d: "General Out" }, correct: "b" },
        { id: 176, text: "Which generation had the 'Integrated Circuit'?", options: { a: "1st", b: "2nd", c: "3rd", d: "4th" }, correct: "c" },
        { id: 177, text: "Which generation had the 'Transistor'?", options: { a: "1st", b: "2nd", c: "3rd", d: "4th" }, correct: "b" },
        { id: 178, text: "Which generation had the 'Vacuum Tube'?", options: { a: "1st", b: "2nd", c: "3rd", d: "4th" }, correct: "a" },
        { id: 179, text: "A Laptop is more powerful than a Supercomputer.", options: { a: "True", b: "False" }, correct: "b" },
        { id: 180, text: "A Smartphone is a computer.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 181, text: "ROM is volatile.", options: { a: "True", b: "False" }, correct: "b" },
        { id: 182, text: "RAM is temporary.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 183, text: "A Printer is an input device.", options: { a: "True", b: "False" }, correct: "b" },
        { id: 184, text: "A Keyboard is an output device.", options: { a: "True", b: "False" }, correct: "b" },
        { id: 185, text: "CPU is the heart of the computer.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 186, text: "ALU stands for Arithmetic Logic Unit.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 187, text: "A scanner converts hard copy to soft copy.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 188, text: "A printer converts soft copy to hard copy.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 189, text: "Machine language uses English words.", options: { a: "True", b: "False" }, correct: "b" },
        { id: 190, text: "High-level languages are easier to learn than machine language.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 191, text: "A 'Bit' is the largest unit of storage.", options: { a: "True", b: "False" }, correct: "b" },
        { id: 192, text: "A 'Byte' consists of 8 bits.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 193, text: "Software is the physical part of a computer.", options: { a: "True", b: "False" }, correct: "b" },
        { id: 194, text: "Hardware is the physical part of a computer.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 195, text: "Windows is an Application software.", options: { a: "True", b: "False" }, correct: "b" },
        { id: 196, text: "Microsoft Word is an Application software.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 197, text: "Antivirus is a Utility software.", options: { a: "True", b: "False" }, correct: "a" },
        { id: 198, text: "A 'Mainframe' is smaller than a 'Microcomputer'.", options: { a: "True", b: "False" }, correct: "b" },
        { id: 199, text: "'GIGO' means the computer is always right even if you give it wrong data.", options: { a: "True", b: "False" }, correct: "b" },
        { id: 200, text: "Computer science is the study of computers and their use.", options: { a: "True", b: "False" }, correct: "a" }
    ]
};

// ================= GLOBAL STATE =================
let currentQuestions = [];

// ================= DOM ELEMENTS =================
const menuScreen = document.getElementById('course-menu');
const quizScreen = document.getElementById('quiz-interface');
const quizContainer = document.getElementById('quiz-container');
const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('results');
const titleDisplay = document.getElementById('course-title-display');
const progressSection = document.getElementById('quiz-progress-section');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

// ================= FUNCTIONS =================

// Update the Progress Bar
function updateProgress() {
    const total = currentQuestions.length;
    // Prevent division by zero
    if (total === 0) return;
    
    const answered = document.querySelectorAll('#quiz-container input[type="radio"]:checked').length;
    const percentage = (answered / total) * 100;

    if (progressBar) progressBar.style.width = percentage + "%";
    if (progressText) progressText.innerText = `Progress: ${answered} of ${total}`;
}

// Switch from Menu to Quiz
function startQuiz(courseId) {
    const selectedCourse = courseData[courseId];
    
    if (!selectedCourse || selectedCourse.length === 0) {
        alert("Questions for this course are coming soon!");
        return;
    }

    currentQuestions = selectedCourse;

    // Switch Screens
    if (menuScreen) menuScreen.classList.add('hidden');
    if (quizScreen) quizScreen.classList.remove('hidden');
    if (progressSection) progressSection.classList.remove('hidden');
    
    if (titleDisplay) titleDisplay.innerText = courseId.toUpperCase() + " Assessment";

    renderQuestions();
    updateProgress();
    window.scrollTo(0, 0);
}

// Return to Menu
function goHome() {
    if (quizScreen) quizScreen.classList.add('hidden');
    if (progressSection) progressSection.classList.add('hidden');
    if (menuScreen) menuScreen.classList.remove('hidden');
    if (titleDisplay) titleDisplay.innerText = "Select a course to begin";
    
    if (quizContainer) quizContainer.innerHTML = '';
}

// Generate HTML for Questions
function renderQuestions() {
    if (!quizContainer) return;
    quizContainer.innerHTML = ''; 

    currentQuestions.forEach((q, index) => {
        const div = document.createElement('div');
        div.classList.add('question-card');
        
        // 1. Question Text
        const h3 = document.createElement('h3');
        h3.innerText = `${index + 1}. ${q.text}`;
        div.appendChild(h3);

        // 2. Options Container
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';

        for (let key in q.options) {
            const label = document.createElement('label');
            const radio = document.createElement('input');
            
            radio.type = 'radio';
            radio.name = `question-${q.id}`;
            radio.value = key;
            radio.onchange = updateProgress; 

            label.appendChild(radio);
            label.append(` ${key.toUpperCase()}. ${q.options[key]}`);
            optionsDiv.appendChild(label);
        }

        div.appendChild(optionsDiv);
        
        // 3. Hidden Feedback Div
        const feedback = document.createElement('div');
        feedback.id = `feedback-${q.id}`;
        feedback.className = 'answer-key hidden';
        div.appendChild(feedback);

        quizContainer.appendChild(div);
    });
    
    const totalEl = document.getElementById('total');
    if (totalEl) totalEl.innerText = currentQuestions.length;
}

// Handle Form Submission
if (quizForm) {
    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let score = 0;

        currentQuestions.forEach(q => {
            const selected = document.querySelector(`input[name="question-${q.id}"]:checked`);
            const feedback = document.getElementById(`feedback-${q.id}`);
            const card = feedback.parentElement;

            card.classList.remove('correct', 'wrong'); 
            feedback.classList.remove('hidden');

            if (selected && selected.value === q.correct) {
                score++;
                card.classList.add('correct');
                feedback.innerText = "✔ Correct!";
                feedback.style.color = "#28a745";
            } else {
                card.classList.add('wrong');
                feedback.innerText = `✘ Correct Answer: ${q.correct.toUpperCase()}`;
                feedback.style.color = "#dc3545";
            }
        });

        const scoreEl = document.getElementById('score');
        if (scoreEl) scoreEl.innerText = score;
        
        if (resultDiv) resultDiv.classList.remove('hidden');
        quizForm.classList.add('hidden'); 
        window.scrollTo(0, 0);
    });
}