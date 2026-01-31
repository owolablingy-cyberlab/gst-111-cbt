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
"frn":[

  { id: 1, text: "Which greeting is most appropriate at 9:30 a.m. in a university environment?", options: { a: "Bonsoir", b: "Salut", c: "Bonjour", d: "Bonne nuit" }, correct: "c" },
  { id: 2, text: "Which expression is primarily used during telephone conversations?", options: { a: "Salut", b: "Bonjour", c: "Allô", d: "Bonsoir" }, correct: "c" },
  { id: 3, text: "Which greeting is informal and best used among friends?", options: { a: "Bonjour", b: "Bonsoir", c: "Salut", d: "Madame, bonjour" }, correct: "c" },
  { id: 4, text: "Which greeting would be inappropriate late at night?", options: { a: "Bonsoir", b: "Bonne nuit", c: "Salut", d: "Bonjour" }, correct: "d" },
  { id: 5, text: "“Bonne nuit” is correctly used when someone is:", options: { a: "Arriving at work", b: "Leaving school", c: "Going to bed", d: "Meeting a lecturer" }, correct: "c" },
  { id: 6, text: "Which greeting can be used throughout the daytime regardless of formality?", options: { a: "Bonsoir", b: "Bonjour", c: "Bonne nuit", d: "Ciao" }, correct: "b" },
  { id: 7, text: "Which greeting shows familiarity between speakers?", options: { a: "Mesdames et Messieurs, bonjour", b: "Bonjour Monsieur", c: "Salut", d: "J’espère que vous allez bien" }, correct: "c" },
  { id: 8, text: "Addressing a lecturer with “Salut” for the first time is:", options: { a: "Formal", b: "Polite", c: "Inappropriate", d: "Academic" }, correct: "c" },
  { id: 9, text: "Which greeting is suitable in both formal and informal settings?", options: { a: "Salut", b: "Allô", c: "Bonjour", d: "Ciao" }, correct: "c" },
  { id: 10, text: "Which greeting is least suitable in a lecture hall?", options: { a: "Bonjour professeur", b: "Mesdames et Messieurs, bonjour", c: "Salut mon pote", d: "J’espère que vous allez bien" }, correct: "c" },
  { id: 11, text: "Which expression is the most formal way of asking about someone’s wellbeing?", options: { a: "Comment ça va ?", b: "Comment vas-tu ?", c: "Comment allez-vous ?", d: "Quoi de neuf ?" }, correct: "c" },
  { id: 12, text: "“Comment vont-elles ?” refers to:", options: { a: "One male person", b: "One female person", c: "A group of females", d: "A mixed group" }, correct: "c" },
  { id: 13, text: "Which expression focuses on events rather than health?", options: { a: "Comment vous portez-vous ?", b: "Comment allez-vous ?", c: "Quoi de neuf ?", d: "Comment va-t-il ?" }, correct: "c" },
  { id: 14, text: "Which question is inappropriate when addressing a lecturer?", options: { a: "Comment allez-vous ?", b: "Vous allez bien ?", c: "Comment vas-tu ?", d: "J’espère que vous allez bien" }, correct: "c" },
  { id: 15, text: "“Comment va-t-il ?” grammatically refers to:", options: { a: "A female singular subject", b: "A male singular subject", c: "A plural subject", d: "The speaker" }, correct: "b" },
  { id: 16, text: "Which expression is neutral and commonly used among friends?", options: { a: "Comment ça va ?", b: "Comment vous portez-vous ?", c: "Comment vont-elles ?", d: "Comment allez-vous ?" }, correct: "a" },
  { id: 17, text: "“Qu’est-ce qui se passe ?” expects:", options: { a: "A yes/no response", b: "A greeting", c: "An explanation", d: "A farewell" }, correct: "c" },
  { id: 18, text: "The informal singular form of “Comment allez-vous ?” is:", options: { a: "Comment ça va ?", b: "Comment vas-tu ?", c: "Quoi de neuf ?", d: "Vous allez bien ?" }, correct: "b" },
  { id: 19, text: "Which expression is grammatically plural?", options: { a: "Comment va-t-il ?", b: "Comment ça va ?", c: "Comment vont-elles ?", d: "Comment vas-tu ?" }, correct: "c" },
  { id: 20, text: "Which question is least appropriate in a formal interview?", options: { a: "Comment allez-vous ?", b: "Comment vous portez-vous ?", c: "J’espère que vous allez bien", d: "Quoi de neuf ?" }, correct: "d" },
  { id: 21, text: "Which response means “I’m doing very well”?", options: { a: "Je vais bien", b: "Je vais très bien", c: "Pas mal", d: "Comme ci, comme ça" }, correct: "b" },
  { id: 22, text: "“Comme ci, comme ça” expresses:", options: { a: "Great satisfaction", b: "Strong excitement", c: "Moderate wellbeing", d: "Serious illness" }, correct: "c" },
  { id: 23, text: "Which response indicates dissatisfaction?", options: { a: "Pas mal", b: "Ça va bien", c: "Ça ne va pas", d: "Je vais très bien" }, correct: "c" },
  { id: 24, text: "“Nous allons bien” refers to:", options: { a: "One person", b: "Two unrelated people", c: "A group including the speaker", d: "A third person only" }, correct: "c" },
  { id: 25, text: "Which response correctly matches a formal question?", options: { a: "Ça va bien, merci. Et toi ?", b: "Ça va bien, merci. Et vous ?", c: "Salut !", d: "Pas mal" }, correct: "b" },
  { id: 26, text: "“Je suis fatigué(e)” expresses:", options: { a: "Hunger", b: "Anger", c: "Tiredness", d: "Excitement" }, correct: "c" },
  { id: 27, text: "Which response is neutral rather than clearly positive?", options: { a: "Je vais très bien", b: "Pas mal", c: "Ça va bien", d: "Nous allons bien" }, correct: "b" },
  { id: 28, text: "“Ils vont bien” refers to:", options: { a: "One female", b: "One male", c: "A group", d: "The speaker" }, correct: "c" },
  { id: 29, text: "Which response would be inappropriate after receiving bad news?", options: { a: "Ça ne va pas", b: "Je suis fatigué(e)", c: "Je vais très bien", d: "Comme ci, comme ça" }, correct: "c" },
  { id: 30, text: "Which expression can politely end a conversation?", options: { a: "Quoi de neuf ?", b: "À bientôt", c: "Comment vas-tu ?", d: "Ça va ?" }, correct: "b" },
  { id: 31, text: "Which farewell implies a permanent separation?", options: { a: "À bientôt", b: "À demain", c: "Adieu", d: "À plus tard" }, correct: "c" },
  { id: 32, text: "“À tout à l’heure” means:", options: { a: "Tomorrow", b: "Next week", c: "Later the same day", d: "Much later" }, correct: "c" },
  { id: 33, text: "Which farewell is informal and borrowed from Italian?", options: { a: "Au revoir", b: "Ciao", c: "Adieu", d: "À la prochaine" }, correct: "b" },
  { id: 34, text: "Which farewell is the most neutral?", options: { a: "Ciao", b: "Adieu", c: "Au revoir", d: "À une prochaine" }, correct: "c" },
  { id: 35, text: "“Bonne journée” is best used:", options: { a: "Late at night", b: "Before sleeping", c: "During the day", d: "After midnight" }, correct: "c" },
  { id: 36, text: "Which farewell fits a professional email?", options: { a: "Salut", b: "Ciao", c: "Au revoir", d: "On se capte plus tard" }, correct: "c" },
  { id: 37, text: "“À demain” means:", options: { a: "See you soon", b: "See you tomorrow", c: "See you later today", d: "Goodbye forever" }, correct: "b" },
  { id: 38, text: "Which farewell is overly casual for a lecturer?", options: { a: "Au revoir", b: "Bonne soirée", c: "Salut", d: "À bientôt" }, correct: "c" },
  { id: 39, text: "“À la prochaine” suggests:", options: { a: "Immediate return", b: "No future meeting", c: "An unspecified next meeting", d: "Formal separation" }, correct: "c" },
  { id: 40, text: "Which farewell is appropriate after an evening class?", options: { a: "Bonne matinée", b: "Bonne soirée", c: "Bonjour", d: "Bonne nuit" }, correct: "b" },
  { id: 41, text: "“Enchanté(e)” is used when:", options: { a: "Leaving", b: "Apologising", c: "Meeting someone for the first time", d: "Asking a question" }, correct: "c" },
  { id: 42, text: "Which expression shows gratitude?", options: { a: "Du courage", b: "Merci beaucoup", c: "Bienvenue", d: "Ravi(e) de vous rencontrer" }, correct: "b" },
  { id: 43, text: "“Du courage !” is best translated as:", options: { a: "Good luck", b: "Encouragement", c: "Congratulations", d: "Goodbye" }, correct: "b" },
  { id: 44, text: "Which expression is informal?", options: { a: "Ravi(e) de vous rencontrer", b: "Salut ma belle", c: "Soyez les bienvenus", d: "Je vous souhaite une excellente journée" }, correct: "b" },
  { id: 45, text: "“Bienvenue !” means:", options: { a: "Goodbye", b: "Welcome", c: "Good luck", d: "Congratulations" }, correct: "b" },
  { id: 46, text: "Which expression is suitable in a formal group setting?", options: { a: "Salut mon pote", b: "Mesdames et Messieurs, bonjour", c: "Eh, ça va ?", d: "On se capte plus tard" }, correct: "b" },
  { id: 47, text: "“J’espère que vous allez bien” is:", options: { a: "Informal", b: "Incorrect", c: "Formal", d: "Slang" }, correct: "c" },
  { id: 48, text: "Which expression is time-specific?", options: { a: "Salut", b: "Bonne matinée", c: "Merci", d: "Enchanté(e)" }, correct: "b" },
  { id: 49, text: "“Fais de beaux rêves” is said:", options: { a: "In class", b: "Before sleeping", c: "At work", d: "During lunch" }, correct: "b" },
  { id: 50, text: "Which expression implies familiarity?", options: { a: "Salut mon cher", b: "Madame, bonjour", c: "Soyez les bienvenus", d: "Je suis heureux(se) de faire votre connaissance" }, correct: "a" },
  { id: 51, text: "“Ouvrez vos livres” instructs students to:", options: { a: "Close their books", b: "Open their books", c: "Submit their books", d: "Exchange books" }, correct: "b" },
  { id: 52, text: "“Écoutez attentivement” requires students to:", options: { a: "Write quickly", b: "Speak loudly", c: "Pay close attention", d: "Leave quietly" }, correct: "c" },
  { id: 53, text: "Which expression asks for permission?", options: { a: "Répétez après moi", b: "Levez la main", c: "Puis-je entrer ?", d: "Asseyez-vous" }, correct: "c" },
  { id: 54, text: "“Travaillez en groupe” implies:", options: { a: "Individual effort", b: "Silent reading", c: "Collaborative work", d: "Teacher instruction" }, correct: "c" },
  { id: 55, text: "Which instruction demands silence?", options: { a: "Écrivez au tableau", b: "Taisez-vous", c: "Parlez plus fort", d: "Lisez à haute voix" }, correct: "b" },
  { id: 56, text: "“Qui peut répondre ?” is best translated as:", options: { a: "Who understands?", b: "Who can answer?", c: "Who is absent?", d: "Who is late?" }, correct: "b" },
  { id: 57, text: "“Asseyez-vous” is an instruction to:", options: { a: "Stand up", b: "Sit down", c: "Move forward", d: "Go outside" }, correct: "b" },
  { id: 58, text: "Which expression would a student use to attract attention politely?", options: { a: "Taisez-vous", b: "Écoutez", c: "S’il vous plaît", d: "Excusez-moi" }, correct: "c" },
  { id: 59, text: "“Lisez le texte” instructs students to:", options: { a: "Copy the text", b: "Translate the text", c: "Read the text", d: "Summarise the text" }, correct: "c" },
  { id: 60, text: "“Qui est absent aujourd’hui ?” refers to:", options: { a: "Academic performance", b: "Attendance", c: "Discipline", d: "Assessment" }, correct: "b" },
  { id: 61, text: "Which command implies repetition?", options: { a: "Répétez après moi", b: "Écrivez au tableau", c: "Écoutez attentivement", d: "Fermez vos livres" }, correct: "a" },
  { id: 62, text: "“Levez la main” expects students to:", options: { a: "Answer immediately", b: "Raise their hand", c: "Sit quietly", d: "Leave the room" }, correct: "b" },
  { id: 63, text: "Which expression is most likely said by a teacher?", options: { a: "Puis-je sortir ?", b: "J’ai fini", c: "Écoutez bien", d: "Je ne comprends pas" }, correct: "c" },
  { id: 64, text: "“Corrigez l’exercice” means:", options: { a: "Do the exercise", b: "Submit the exercise", c: "Correct the exercise", d: "Cancel the exercise" }, correct: "c" },
  { id: 65, text: "Which expression signals the end of a task?", options: { a: "Continuez", b: "Arrêtez", c: "Travaillez", d: "Commencez" }, correct: "b" },
  { id: 66, text: "“Le tableau” refers to:", options: { a: "The desk", b: "The board", c: "The book", d: "The bag" }, correct: "b" },
  { id: 67, text: "“La salle de classe” means:", options: { a: "Staff room", b: "Classroom", c: "Laboratory", d: "Office" }, correct: "b" },
  { id: 68, text: "Which item is used for writing?", options: { a: "La porte", b: "Le stylo", c: "La fenêtre", d: "La chaise" }, correct: "b" },
  { id: 69, text: "“Le cahier” is best translated as:", options: { a: "Textbook", b: "Notebook", c: "Dictionary", d: "Folder" }, correct: "b" },
  { id: 70, text: "Which item stores learning materials?", options: { a: "Le sac", b: "La craie", c: "Le tableau", d: "La règle" }, correct: "a" },
  { id: 71, text: "“La chaise” refers to:", options: { a: "Table", b: "Door", c: "Chair", d: "Shelf" }, correct: "c" },
  { id: 72, text: "“La craie” is used mainly on the:", options: { a: "Desk", b: "Paper", c: "Board", d: "Floor" }, correct: "c" },
  { id: 73, text: "Which word refers to furniture?", options: { a: "Le stylo", b: "Le sac", c: "La chaise", d: "Le cahier" }, correct: "c" },
  { id: 74, text: "“Le bureau” most appropriately means:", options: { a: "Chair", b: "Desk", c: "Classroom", d: "Office building" }, correct: "b" },
  { id: 75, text: "Which of the following is not a classroom object?", options: { a: "La fenêtre", b: "Le sac", c: "Le lit", d: "Le tableau" }, correct: "c" },
  { id: 76, text: "“La règle” is used to:", options: { a: "Measure", b: "Erase", c: "Cut", d: "Write" }, correct: "a" },
  { id: 77, text: "Which object is used to erase writing?", options: { a: "La craie", b: "Le tableau", c: "La gomme", d: "Le sac" }, correct: "c" },
  { id: 78, text: "“Le livre” is primarily used for:", options: { a: "Sitting", b: "Reading", c: "Writing", d: "Measuring" }, correct: "b" },
  { id: 79, text: "Which vocabulary item is plural by default in French usage?", options: { a: "Les ciseaux", b: "Le stylo", c: "La règle", d: "Le livre" }, correct: "a" },
  { id: 80, text: "“La porte” functions as:", options: { a: "Furniture", b: "Writing tool", c: "Entry point", d: "Learning material" }, correct: "c" },
  { id: 81, text: "“L’examen” refers to:", options: { a: "Homework", b: "Test", c: "Lecture", d: "Attendance" }, correct: "b" },
  { id: 82, text: "“La note” in an academic context means:", options: { a: "Notebook", b: "Grade", c: "Lecture", d: "Question" }, correct: "b" },
  { id: 83, text: "“Réussir” means to:", options: { a: "Fail", b: "Pass", c: "Repeat", d: "Miss" }, correct: "b" },
  { id: 84, text: "“Échouer” is the opposite of:", options: { a: "Étudier", b: "Apprendre", c: "Réussir", d: "Écrire" }, correct: "c" },
  { id: 85, text: "Which term refers to homework?", options: { a: "Le devoir", b: "Le livre", c: "Le tableau", d: "La classe" }, correct: "a" },
  { id: 86, text: "“La correction” relates to:", options: { a: "Teaching", b: "Marking", c: "Attendance", d: "Admission" }, correct: "b" },
  { id: 87, text: "Which term refers to continuous assessment?", options: { a: "L’examen final", b: "Le test", c: "Le contrôle continu", d: "Le diplôme" }, correct: "c" },
  { id: 88, text: "“La moyenne” means:", options: { a: "Failure", b: "Average", c: "Total", d: "Maximum" }, correct: "b" },
  { id: 89, text: "Which word refers to academic success?", options: { a: "L’échec", b: "La note", c: "La réussite", d: "L’absence" }, correct: "c" },
  { id: 90, text: "“Redoubler” means to:", options: { a: "Graduate", b: "Repeat a class", c: "Pass with distinction", d: "Withdraw" }, correct: "b" },
  { id: 91, text: "A student greeting a lecturer should say:", options: { a: "Salut !", b: "Bonjour professeur", c: "Ciao", d: "Quoi de neuf ?" }, correct: "b" },
  { id: 92, text: "A polite response to “Comment allez-vous ?” is:", options: { a: "Ça va, et toi ?", b: "Je vais bien, merci. Et vous ?", c: "Pas mal, mec", d: "Comme ci, comme ça, hein" }, correct: "b" },
  { id: 93, text: "Which expression best closes a formal discussion?", options: { a: "À plus", b: "Au revoir", c: "Salut", d: "On se capte" }, correct: "b" },
  { id: 94, text: "A student asking permission to leave should say:", options: { a: "Je sors", b: "Puis-je sortir, s’il vous plaît ?", c: "Je vais dehors", d: "Excuse-toi" }, correct: "b" },
  { id: 95, text: "“Travaillez en silence” means:", options: { a: "Speak softly", b: "Work quietly", c: "Read loudly", d: "Discuss freely" }, correct: "b" },
  { id: 96, text: "Which response shows tiredness?", options: { a: "Je vais très bien", b: "Je suis fatigué(e)", c: "Pas mal", d: "Comme ci, comme ça" }, correct: "b" },
  { id: 97, text: "Which farewell fits a late-night message?", options: { a: "Bonne nuit", b: "Bonjour", c: "Bonne matinée", d: "Salut" }, correct: "a" },
  { id: 98, text: "Which expression shows encouragement?", options: { a: "Du courage !", b: "Enchanté(e)", c: "Bienvenue", d: "Merci" }, correct: "a" },
  { id: 99, text: "Which expression fits a classroom apology?", options: { a: "Excusez-moi", b: "Salut", c: "À bientôt", d: "Merci beaucoup" }, correct: "a" },
  { id: 100, text: "A student ending a presentation politely should say:", options: { a: "Ciao", b: "Merci de votre attention", c: "À plus", d: "Salut tout le monde" }, correct: "b" }
],

"lis":[

  // Section 1: Meaning and Scope
  { id: 1, text: "The etymological origin of the word ‘Library’ is the Latin term libraria, which literally translates to:", options: { a: "A collection of scrolls", b: "A book place", c: "A room for study", d: "A professional gathering" }, correct: "b" },
  { id: 2, text: "A library is defined as a space where information is gathered, processed, stored, and disseminated in which formats?", options: { a: "Only printed books", b: "Only digital records", c: "Both book and non-book forms", d: "Exclusively via the internet" }, correct: "c" },
  { id: 3, text: "According to the sources, modern libraries extend their services beyond physical walls primarily through:", options: { a: "Mobile book vans", b: "Electronic means and the internet", c: "Community hubs", d: "Postal delivery services" }, correct: "b" },
  { id: 4, text: "Dr. S. R. Ranganathan, a pioneer in library science, emphasizes that a library is a public place that:", options: { a: "Sells books to the public", b: "Preserves books for scholars only", c: "Collects, takes care of, and makes books available to those in need", d: "Focuses strictly on information technology" }, correct: "c" },
  { id: 5, text: "The information industry presents a challenge to libraries because:", options: { a: "It makes information more expensive", b: "It offers alternatives that allow users to bypass the physical library", c: "It discourages the use of computers", d: "It focuses only on entertainment products" }, correct: "b" },
  { id: 6, text: "Which service involves librarians sending information to users before they even request it?", options: { a: "Interlibrary Loan", b: "Selective Dissemination of Information (SDI)", c: "Reference Services", d: "Technical Processing" }, correct: "b" },
  { id: 7, text: "What has the availability of electronic information led libraries to do regarding their internal structure?", options: { a: "Close down physical reading rooms", b: "Work closely with computer centres", c: "Stop acquiring printed journals", d: "Reduce the number of qualified librarians" }, correct: "b" },
  { id: 8, text: "Librarians are now working outside traditional libraries in fields such as:", options: { a: "Information technology, marketing, and law", b: "Civil engineering and medicine", c: "Physical education and sports", d: "Construction and agriculture" }, correct: "a" },
  { id: 9, text: "Why is a library described as a 'growing organism' in the sources?", options: { a: "Because books are made from organic materials", b: "Because its collection is systematically and purposefully acquired to meet evolving needs", c: "Because the physical building must be painted annually", d: "Because the staff size must double every year" }, correct: "b" },
  { id: 10, text: "What defines the systematic organization of a library collection?", options: { a: "It is arranged by the color of the book covers", b: "It is consciously acquired and stored for preservation and use", c: "It is left in the order it was purchased", d: "It is organized based on the size of the books" }, correct: "b" },

  // Section 2: Attributes
  { id: 11, text: "In the Nigerian context, the term 'library' is often abused when:", options: { a: "Rooms are labeled 'libraries' despite having only a few old, unneeded books", b: "Only digital materials are present", c: "Students use the library for group study", d: "Books are borrowed for more than two weeks" }, correct: "a" },
  { id: 12, text: "A collection administered by a person with no formal education or training in librarianship is considered:", options: { a: "A specialized library", b: "Not a library, regardless of their other qualifications", c: "A private collection of high value", d: "A community reading room" }, correct: "b" },
  { id: 13, text: "Which of the following is NOT an attribute of a library as listed in the sources?", options: { a: "A convenient space set aside for library operations", b: "A dynamic collection of materials", c: "Materials must be stored in alphabetical order by the author's first name only", d: "Only trained persons (librarians/library officers) must be in charge" }, correct: "c" },
  { id: 14, text: "For a collection to be a library, people must be allowed to use it at:", options: { a: "Any time of the day or night", b: "Specified times", c: "Only during weekends", d: "Only during public holidays" }, correct: "b" },
  { id: 15, text: "Systematic organization in a library is primarily for the purpose of:", options: { a: "Making the room look attractive", b: "Posterior preservation and useful order for retrieval", c: "Increasing the weight of the shelves", d: "Preventing students from touching the books" }, correct: "b" },

  // Section 3: Purposes and Functions
  { id: 16, text: "The main purpose of creating a library is to make human thoughts, ideas, and expressions:", options: { a: "Exclusive to researchers", b: "Accessible to everyone", c: "Profitable for publishers", d: "Limited to government officials" }, correct: "b" },
  { id: 17, text: "Which function of the library supports formal education and encourages a culture of reading?", options: { a: "Recreational function", b: "Research function", c: "Education function", d: "Preservation of natural heritage" }, correct: "c" },
  { id: 18, text: "The 'Information' function of a library treats it as an agent of:", options: { a: "Financial investment", b: "General sensitization and societal enlightenment", c: "Political propaganda", d: "Corporate secrecy" }, correct: "b" },
  { id: 19, text: "Which library type is most associated with the 'Research function' for grant-awarding projects?", options: { a: "School libraries", b: "Public libraries", c: "Academic and research libraries", d: "Private libraries" }, correct: "c" },
  { id: 20, text: "The recreational function of a library typically includes providing:", options: { a: "Encyclopedias and indexes", b: "Fiction books, magazines, and newspapers", c: "Law reports and case studies", d: "Technical manuals for engineering" }, correct: "b" },
  { id: 21, text: "Preservation of 'natural heritage' in a library context refers to:", options: { a: "Planting trees around the library", b: "Storing ideas, beliefs, arts, and laws for posterity", c: "Saving endangered animal species", d: "Recycling old paper" }, correct: "b" },
  { id: 22, text: "Libraries assist individuals in developing intellectual abilities by offering:", options: { a: "Free internet for gaming", b: "A variety of resources, including books and other materials", c: "Financial loans for students", d: "Employment opportunities in construction" }, correct: "b" },
  { id: 23, text: "One of the stated functions of a library is to provide accurate and accessible information regardless of a person’s:", options: { a: "Library card status", b: "Background or identity", c: "Level of computer literacy", d: "Proximity to the building" }, correct: "b" },
  { id: 24, text: "Libraries offer opportunities for continuous learning that are both:", options: { a: "Expensive and exclusive", b: "Formal and informal", c: "Digital and physical only", d: "Primary and secondary" }, correct: "b" },
  { id: 25, text: "The role of the library as a 'warehouse of information' specifically relates to:", options: { a: "Storing unused furniture", b: "Preserving the perceptions of primitive and modern societies for the future", c: "Holding books until they are sold at auction", d: "Managing the logistics of book shipments" }, correct: "b" },

  // Section 4: Roles in the 21st Century
  { id: 26, text: "'Training the trainees' refers to the role of the library in:", options: { a: "Teaching librarians how to clean shelves", b: "Training users and librarians on advanced service methods", c: "Teaching publishers how to print books", d: "Training students in physical education" }, correct: "b" },
  { id: 27, text: "Information literacy skills include all the following EXCEPT:", options: { a: "Information need conception", b: "Sourcing information online", c: "Selling retrieved information for profit", d: "Detecting ethical considerations of information" }, correct: "c" },
  { id: 28, text: "The role of the 'intellectual reservoir for the society' implies that the library:", options: { a: "Is the last point of access for current societal information", b: "Only stores information about the past", c: "Is a water storage facility for the community", d: "Holds the secrets of the government" }, correct: "a" },
  { id: 29, text: "How does a library function as a resource centre for Artificial Intelligence (AI)?", options: { a: "It builds robots to replace librarians", b: "It prescribes and trains individuals on the best AI tools for organizations", c: "It provides free software for hackers", d: "It ignores AI to focus on traditional books" }, correct: "b" },
  { id: 30, text: "In terms of information retrieval, libraries teach users the best:", options: { a: "Passwords for restricted sites", b: "Search terms and crawler terms for internet searches", c: "Ways to avoid paying for books", d: "Methods for photocopying entire textbooks" }, correct: "b" },
  { id: 31, text: "Institutional repositories help an institution by:", options: { a: "Hiding research from the public", b: "Pushing research frontiers through a database of published works by institution members", c: "Increasing the cost of tuition", d: "Replacing the need for a physical library building" }, correct: "b" },
  { id: 32, text: "'Consortium building' is necessary because:", options: { a: "Libraries want to compete with each other", b: "A single library cannot adequately service all needs due to financial and changing user needs", c: "It is required by international law", d: "Librarians prefer to work in different buildings" }, correct: "b" },
  { id: 33, text: "Which of the following is a benefit of a library consortium?", options: { a: "Increasing the individual library's debt", b: "Sharing common storage facilities and resources", c: "Limiting user access to only one building", d: "Reducing the number of books acquired" }, correct: "b" },
  { id: 34, text: "21st-century libraries are 'saddled with the responsibility' of teaching users how to:", options: { a: "Build their own computers", b: "Retrieve information scattered on the internet", c: "Avoid using the World Wide Web", d: "Write novels for publication" }, correct: "b" },
  { id: 35, text: "The concept of 'leverage' in consortium building refers to:", options: { a: "Using physical levers to move bookshelves", b: "Utilizing strengths and weaknesses of member libraries to better serve users", c: "Forcing users to pay higher fees", d: "Borrowing money from the government" }, correct: "b" },

  // Section 5: Academic Libraries
  { id: 36, text: "Academic libraries are often considered the:", options: { a: "Brain of the city", b: "Heart of educational institutions", c: "Warehouse of the state", d: "Archive of the military" }, correct: "b" },
  { id: 37, text: "Which of the following is an example of an academic library mentioned in the source?", options: { a: "St. James Nursery Library", b: "Kenneth Dike Library, University of Ibadan", c: "Osun State Library Board", d: "National Library of Nigeria" }, correct: "b" },
  { id: 38, text: "Beyond print materials, academic libraries offer digital resources such as:", options: { a: "Social media accounts for all students", b: "Online databases, e-journals, and e-books", c: "Free video game downloads", d: "Private email servers for staff" }, correct: "b" },
  { id: 39, text: "Specialized facilities like 'language labs' or 'art studios' can sometimes be found in:", options: { a: "Public libraries", b: "Academic libraries", c: "Private libraries", d: "National libraries" }, correct: "b" },
  { id: 40, text: "One function of academic libraries is to provide essential research materials such as:", options: { a: "Fiction novels for leisure", b: "Bibliographies, gazetteers, and monographs", c: "Local newspapers from 50 years ago only", d: "Comic books and posters" }, correct: "b" },
  { id: 41, text: "How do academic libraries support professors?", options: { a: "By grading student exams", b: "By assisting in writing research papers, dissertations, and publications", c: "By managing the university's payroll", d: "By providing free housing" }, correct: "b" },
  { id: 42, text: "Advocacy for 'adequate funding and resources' is a role of the:", options: { a: "Students only", b: "Academic library within the university community", c: "Local government", d: "Book publishers" }, correct: "b" },
  { id: 43, text: "Which library is associated with the University of Ilesa?", options: { a: "Hezikiah Oluwasanmi Library", b: "Dr. Lawrence Omole Library", c: "Ahmadu Bello University Library", d: "Kenneth Dike Library" }, correct: "b" },
  { id: 44, text: "Reference services in academic libraries help users with:", options: { a: "Locating, accessing, and evaluating information", b: "Paying their tuition fees", c: "Finding part-time jobs", d: "Organizing social events" }, correct: "a" },
  { id: 45, text: "Academic libraries ensure their resources align with:", options: { a: "The interests of the local mayor", b: "The institution's curriculum", c: "The latest trends in fashion", d: "The requirements of the national army" }, correct: "b" },

  // Section 6: School Libraries
  { id: 46, text: "School libraries are established in pre-primary, primary, and secondary schools primarily to:", options: { a: "Store old exam papers", b: "Inculcate reading and studying habits in pupils", c: "Provide a place for teachers to nap", d: "Sell stationery to students" }, correct: "b" },
  { id: 47, text: "Who are the primary users served by a school library?", options: { a: "General public and university researchers", b: "Students, staff, and often parents of the school", c: "Government officials and lawyers", d: "Doctors and medical students" }, correct: "b" },
  { id: 48, text: "School libraries cultivate a love of reading in children, which prompts them to:", options: { a: "Appreciate literacy", b: "Quit school early", c: "Buy more toys", d: "Become professional athletes only" }, correct: "a" },
  { id: 49, text: "Interlibrary loan services in school libraries allow students to:", options: { a: "Borrow money from other schools", b: "Borrow materials from other libraries", c: "Skip classes to visit other libraries", d: "Sell books to other students" }, correct: "b" },
  { id: 50, text: "A 'safe space' in a school library context allows students to explore:", options: { a: "The school’s roof", b: "Diverse and potentially controversial topics in privacy", c: "Restricted government documents", d: "The personal lives of their teachers" }, correct: "b" },
  { id: 51, text: "Workshops offered by school libraries may cover topics such as:", options: { a: "Car maintenance", b: "Information literacy and research methods", c: "Cooking and nutrition", d: "Professional wrestling" }, correct: "b" },
  { id: 52, text: "School libraries work closely with 'other school departments' to:", options: { a: "Compete for the school's budget", b: "Achieve overall educational goals", c: "Organize sports competitions", d: "Monitor student behavior in the cafeteria" }, correct: "b" },
  { id: 53, text: "Which of the following is an example of a school library?", options: { a: "University of Lagos Library", b: "Ilesa Grammar School Library", c: "House of Assembly Library", d: "National Library of Nigeria" }, correct: "b" },
  { id: 54, text: "Promoting 'cultural awareness' in school libraries is achieved through:", options: { a: "Segregating students by background", b: "Diverse collections and programs", c: "Focusing only on local history", d: "Excluding digital materials" }, correct: "b" },
  { id: 55, text: "As technology evolves, school libraries must:", options: { a: "Remove all printed books", b: "Adapt to meet changing needs and remain relevant", c: "Close down and become computer labs only", d: "Charge students for every search" }, correct: "b" },

  // Section 7: Public Libraries
  { id: 56, text: "Public libraries are often referred to as 'free for all' because:", options: { a: "They have no security", b: "They are open to everyone regardless of age or socioeconomic status", c: "All books are given away for free", d: "They are only for unemployed people" }, correct: "b" },
  { id: 57, text: "Unlike academic libraries, public libraries cater to:", options: { a: "Only literate professors", b: "Both literate and non-literate individuals", c: "Only people with high-paying jobs", d: "Only university students" }, correct: "b" },
  { id: 58, text: "How are public libraries primarily funded?", options: { a: "Through student tuition", b: "By private donations only", c: "By the government using taxpayer money", d: "By selling coffee and snacks" }, correct: "c" },
  { id: 59, text: "What kind of collection is typical for a public library?", options: { a: "Highly discipline-oriented (e.g., only Law)", b: "Diverse and general (books, magazines, newspapers)", c: "Restricted to ancient manuscripts", d: "Only scientific journals" }, correct: "b" },
  { id: 60, text: "Public libraries serve as 'community centers' by:", options: { a: "Providing a safe and welcoming space for people to gather", b: "Hosting political rallies", c: "Operating as a local police station", d: "Acting as a marketplace for local vendors" }, correct: "a" },
  { id: 61, text: "Which of the following is an example of a public library in Nigeria?", options: { a: "Kenneth Dike Library", b: "Osun State Library Board", c: "St. James Nursery Library", d: "Library of Congress" }, correct: "b" },
  { id: 62, text: "'Literacy programs' in public libraries are designed to:", options: { a: "Help people write better emails", b: "Bridge the literacy gap and ensure opportunity for all", c: "Teach people how to use social media only", d: "Encourage people to buy more books from publishers" }, correct: "b" },
  { id: 63, text: "Cultural events hosted by public libraries include:", options: { a: "Professional boxing matches", b: "Author talks, film screenings, and music performances", c: "High-stakes gambling", d: "Religious services only" }, correct: "b" },
  { id: 64, text: "Public libraries help 'social inclusion and equity' by:", options: { a: "Charging entry fees", b: "Providing resources to marginalized groups", c: "Only allowing residents of certain neighborhoods", d: "Limiting the number of books a person can read" }, correct: "b" },
  { id: 65, text: "Preservation of 'local history and culture' in public libraries often involves:", options: { a: "Creating museum exhibits of old clothing", b: "Specialized collections and programs about the community", c: "Recording the private conversations of citizens", d: "Deleting digital records to save space" }, correct: "b" },

  // Section 8: Private and National Libraries
  { id: 66, text: "A private library is primarily a reflection of:", options: { a: "The government’s agenda", b: "The owner’s interests, personality, and intellectual pursuits", c: "The latest best-seller list", d: "The requirements of a local school" }, correct: "b" },
  { id: 67, text: "Which of these is an example of a private library?", options: { a: "NGO Libraries", b: "House of Assembly Library", c: "Osun State Library Board", d: "National Library of Nigeria" }, correct: "a" },
  { id: 68, text: "National libraries are often described as the 'apex library' and the:", options: { a: "Heart of the school", b: "Memory of a nation", c: "Wallet of the government", d: "Archive of the university" }, correct: "b" },
  { id: 69, text: "What is the 'legal deposit' function of a national library?", options: { a: "It collects taxes from citizens", b: "It freely collects copies of all published materials in the country by law", c: "It deposits money into the national bank", d: "It stores legal documents for the police only" }, correct: "b" },
  { id: 70, text: "The National Library of Nigeria is an example of a(n):", options: { a: "Academic library", b: "National library", c: "Special library", d: "Private library" }, correct: "b" },
  { id: 71, text: "National libraries promote 'cultural tourism' by:", options: { a: "Selling plane tickets", b: "Showcasing collections and organizing exhibitions", c: "Operating as a hotel for researchers", d: "Translating foreign movies" }, correct: "b" },
  { id: 72, text: "A 'National Bibliography' created by a national library is:", options: { a: "A history book of the country", b: "A record of all publications produced in the country", c: "A list of all citizens in the country", d: "A dictionary of local languages" }, correct: "b" },
  { id: 73, text: "National libraries employ specialized staff such as:", options: { a: "Construction workers", b: "Archivists and conservators", c: "Accountants and sales reps", d: "Security guards only" }, correct: "b" },
  { id: 74, text: "International collaboration between national libraries facilitates:", options: { a: "The exchange of information and cultural materials", b: "The sale of books between countries", c: "The creation of a global government", d: "The reduction of taxes" }, correct: "a" },
  { id: 75, text: "The 'Apex body' function means the national library:", options: { a: "Is located on the highest floor of a building", b: "Coordinates with other libraries in the national library system", c: "Is the only library allowed to exist", d: "Has the most expensive books" }, correct: "b" },

  // Section 9: Special Libraries
  { id: 76, text: "Special libraries cater to the needs of:", options: { a: "Everyone in the community", b: "Particular groups or industries (e.g., law, medicine, technology)", c: "Only primary school children", d: "Non-literate populations" }, correct: "b" },
  { id: 77, text: "A medical library would most likely contain:", options: { a: "Legal codes and case reports", b: "Medical journals, textbooks, and databases", c: "Children’s fiction and picture books", d: "Maps and travelogues" }, correct: "b" },
  { id: 78, text: "Where are special libraries commonly found?", options: { a: "Only in town halls", b: "Universities, corporations, government agencies, and research institutions", c: "In every shopping mall", d: "In public parks" }, correct: "b" },
  { id: 79, text: "One key advantage of a specialized library is its ability to provide:", options: { a: "Free coffee to users", b: "In-depth knowledge and expertise on a particular subject", c: "General entertainment for the whole family", d: "A place to store personal items" }, correct: "b" },
  { id: 80, text: "Special libraries support professional development by:", options: { a: "Paying for users' higher education", b: "Hosting continuing education programs and workshops", c: "Finding jobs for everyone in the city", d: "Writing resumes for users" }, correct: "b" }
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
}// Handle Form Submission
if (quizForm) {
    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let score = 0;

        // 1. Calculate Score
        currentQuestions.forEach(q => {
            const selected = document.querySelector(`input[name="question-${q.id}"]:checked`);
            if (selected && selected.value === q.correct) {
                score++;
            }
        });

        // 2. Show Results Screen
        document.getElementById('score').innerText = score;
        document.getElementById('total').innerText = currentQuestions.length;
        
        resultDiv.classList.remove('hidden');
        quizForm.classList.add('hidden'); 
        window.scrollTo(0, 0);

        // 3. Setup "View Corrections" Button
        const viewBtn = document.getElementById('view-answer-btn');
        const reviewContainer = document.getElementById('review-container');
        
        viewBtn.onclick = () => {
            viewBtn.classList.add('hidden'); // Hide button after clicking
            reviewContainer.classList.remove('hidden');
            reviewContainer.innerHTML = '<h3>Test Corrections:</h3>'; // Reset title

            currentQuestions.forEach((q, index) => {
                const selected = document.querySelector(`input[name="question-${q.id}"]:checked`);
                const userAnswer = selected ? selected.value : null;
                
                // Create Card for each question
                const card = document.createElement('div');
                card.className = 'question-card';
                card.innerHTML = `<h4>${index + 1}. ${q.text}</h4>`;

                // Loop through options to show which was right/wrong
                for (let key in q.options) {
                    let optionClass = 'review-option';
                    let icon = '';

                    // Logic: Is this the correct answer?
                    if (key === q.correct) {
                        optionClass += ' correct-answer';
                        icon = ' ✅';
                    } 
                    // Logic: Is this what the user picked (and was it wrong)?
                    else if (key === userAnswer) {
                        optionClass += ' wrong-answer';
                        icon = ' ❌ (Your Choice)';
                    }

                    const optionDiv = document.createElement('div');
                    optionDiv.className = optionClass;
                    optionDiv.innerText = `${key.toUpperCase()}. ${q.options[key]} ${icon}`;
                    card.appendChild(optionDiv);
                }
                reviewContainer.appendChild(card);
            });
        };
    });
}