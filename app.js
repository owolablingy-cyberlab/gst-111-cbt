// 1. THE DATA
const questions = [
    {
        id: 1,
        text: "Phonology is often described as the study of:",
        options: { a: "Word meanings", b: "Sentence structure", c: "The sound system of a language", d: "Letter formation" },
        correct: "c"
    },
    {
        id: 2,
        text: "Phonetics focuses on the study of:",
        options: { a: "Written symbols", b: "Speech sounds", c: "Grammar rules", d: "Sentence meaning" },
        correct: "b"
    },
    {
        id: 3,
        text: "The smallest unit of sound in a language is known as a:",
        options: { a: "Morpheme", b: "Phoneme", c: "Syllable", d: "Lexeme" },
        correct: "b"
    },
    {
        id: 4,
        text: "Which of the following best defines a vowel sound?",
        options: { a: "Complete closure", b: "Partial closure", c: "Without obstruction of airflow", d: "Produced through nose" },
        correct: "c"
    },
    {
        id: 5,
        text: "The vowel sound /iː/ is found in which word?",
        options: { a: "Sit", b: "Beat", c: "Set", d: "Bat" },
        correct: "b"
    },

    {
        id: 6,
        text: "The sound /æ/ occurs in which word?",
        options: { a: "Man", b: "Moon", c: "Meat", d: "Note" },
        correct: "a"
    },
    {
        id: 7,
        text: "Diphthongs are vowel sounds that involve:",
        options: { a: "One fixed tongue position", b: "Two vowel sounds gliding into one another", c: "Consonant and vowel combination", d: "Nasal airflow" },
        correct: "b"
    },
    {
        id: 8,
        text: "The diphthong /aɪ/ occurs in which word?",
        options: { a: "Boy", b: "Buy", c: "Cow", d: "Go" },
        correct: "b"
    },
    {
        id: 9,
        text: "Which of the following contains the diphthong /eɪ/?",
        options: { a: "Bed", b: "Say", c: "Sit", d: "Cot" },
        correct: "b"
    },
    {
        id: 10,
        text: "Long vowels in phonetic transcription are usually indicated by:",
        options: { a: "Capital letters", b: "A stress mark", c: "A length mark (:)", d: "A hyphen" },
        correct: "c"
    },
    {
        id: 11,
        text: "Stress refers to the:",
        options: { a: "Speed of pronunciation", b: "Emphasis placed on a syllable", c: "Meaning of a word", d: "Pitch of a sentence" },
        correct: "b"
    },
    {
        id: 12,
        text: "In English, stressed syllables are produced with:",
        options: { a: "Less force", b: "No sound", c: "Greater force", d: "Silence" },
        correct: "c"
    },
    {
        id: 13,
        text: "Primary stress is:",
        options: { a: "The weakest stress", b: "The strongest stress in a word", c: "Found only in sentences", d: "Optional in speech" },
        correct: "b"
    },
    {
        id: 14,
        text: "Intonation refers to the:",
        options: { a: "Arrangement of words", b: "Rise and fall of pitch in speech", c: "Speed of speech", d: "Stress placement" },
        correct: "b"
    },
    {
        id: 15,
        text: "A falling intonation is commonly used in:",
        options: { a: "Yes/No questions", b: "Statements", c: "Incomplete lists", d: "Greetings" },
        correct: "b"
    },
    {
        id: 16,
        text: "Rising intonation is typically used in:",
        options: { a: "Commands", b: "Statements", c: "Yes/No questions", d: "Exclamations" },
        correct: "c"
    },
    {
        id: 17,
        text: "In a list, all items except the last usually take:",
        options: { a: "Falling tune", b: "Rising tune", c: "Flat tune", d: "No tune" },
        correct: "b"
    },
    {
        id: 18,
        text: "Which sentence is likely to have a rising tune?",
        options: { a: "She is coming tomorrow.", b: "Close the door.", c: "Are you ready?", d: "I like rice." },
        correct: "c"
    },
    {
        id: 19,
        text: "Stress placement can change the:",
        options: { a: "Spelling of a word", b: "Meaning of a word", c: "Length of a sentence", d: "Part of speech only." },
        correct: "b"
    },
    {
        id: 20,
        text: "The stressed syllable in a word is often louder and:",
        options: { a: "Shorter", b: "Softer", c: "Longer", d: "Silent" },
        correct: "c"
    },
    {
        id: 21,
        text: "Morphology is the study of:",
        options: { a: "Sentence meaning", b: "Word formation", c: "Speech sounds", d: "Writing systems" },
        correct: "b"
    },
    {
        id: 22,
        text: "The smallest unit of meaning in a language is a:",
        options: { a: "Word", b: "Phoneme", c: "Morpheme", d: "Syllable." },
        correct: "c"
    },
    {
        id: 23,
        text: "Which of the following is an example of a free morpheme?",
        options: { a: "-ness", b: "Un-", c: "Book", d: "-ed" },
        correct: "c"
    },
    {
        id: 24,
        text: "A bound morpheme:",
        options: { a: "Can stand alone", b: "Has meaning only when attached", c: "Is always a word", d: "Is a sentence" },
        correct: "b"
    },
    {
        id: 25,
        text: "Inflectional morphemes mainly indicate:",
        options: { a: "New meanings", b: "Tense, number, and comparison", c: "Word pronunciation", d: "Stress patterns" },
        correct: "b"
    },
    {
        id: 26,
        text: "Derivational morphemes are used to:",
        options: { a: "Change sentence order", b: "Create new words", c: "Show agreement", d: "Mark plural only" },
        correct: "b"
    },
    {
        id: 27,
        text: "The prefix “un-” in unhappy expresses:",
        options: { a: "Tense", b: "Negation", c: "Number", d: "Comparison" },
        correct: "b"
    },
    {
        id: 28,
        text: "Suffixes are attached to the:",
        options: { a: "Beginning of a word", b: "Middle of a word", c: "End of a word", d: "Sound of a word." },
        correct: "c"
    },
    {
        id: 29,
        text: "Compounding involves:",
        options: { a: "Adding prefixes", b: "Adding suffixes", c: "Combining two or more words", d: "Shortening words." },
        correct: "c"
    },
    {
        id: 30,
        text: "Which of the following is a compound word?",
        options: { a: "Happiness", b: "Teacher", c: "Blackboard", d: "Running" },
        correct: "c"
    },
    {
        id: 31,
        text: "Syntax is concerned with:",
        options: { a: "Word meanings", b: "Sentence structure", c: "Speech sounds", d: "Writing skills." },
        correct: "b"
    },
    {
        id: 32,
        text: "A simple sentence contains:",
        options: { a: "One independent clause", b: "Two independent clauses", c: "One dependent clause", d: "No verb." },
        correct: "a"
    },
    {
        id: 33,
        text: "A compound sentence consists of:",
        options: { a: "One clause", b: "Two or more independent clauses", c: "One dependent clause", d: "Only phrases" },
        correct: "b"
    },
    {
        id: 34,
        text: "A complex sentence contains:",
        options: { a: "Only independent clauses", b: "One independent and one or more dependent clauses", c: "No subject", d: "No verb" },
        correct: "b"
    },
    {
        id: 35,
        text: "Coordinating conjunctions include all EXCEPT:",
        options: { a: "And", b: "But", c: "Because", d: "Or." },
        correct: "c"
    },
    {
        id: 36,
        text: "Subordinating conjunctions include:",
        options: { a: "And", b: "Or", c: "But", d: "Because." },
        correct: "d"
    },
    {
        id: 37,
        text: "The subject of a sentence is the:",
        options: { a: "Action performed", b: "Receiver of action", c: "Doer of the action", d: "Description" },
        correct: "c"
    },
    {
        id: 38,
        text: "The predicate of a sentence contains the:",
        options: { a: "Subject only", b: "Verb and its complements", c: "Noun only", d: "Object only." },
        correct: "b"
    },
    {
        id: 39,
        text: "In “She wrote a letter,” a letter is the:",
        options: { a: "Subject", b: "Verb", c: "Direct object", d: "Indirect object" },
        correct: "c"
    },
    {
        id: 40,
        text: "An indirect object answers the question:",
        options: { a: "What?", b: "When?", c: "To whom?", d: "Where?." },
        correct: "c"
    },
    {
        id: 41,
        text: "Phonetics studies how speech sounds are produced.",
        options: { a: "True", b: "False" },
        correct: "a"
    },
    {
        id: 42,
        text: "A vowel sound is produced with complete obstruction of airflow.",
        options: { a: "True", b: "False" },
        correct: "b"
    },
    {
        id: 43,
        text: "Diphthongs consist of two vowel sounds gliding together.",
        options: { a: "True", b: "False" },
        correct: "a"
    },
    {
        id: 44,
        text: "Stress has no effect on meaning in English.",
        options: { a: "True", b: "False" },
        correct: "b"
    },
    {
        id: 45,
        text: "Rising intonation is commonly used in Yes/No questions.",
        options: { a: "True", b: "False" },
        correct: "a"
    },
    {
        id: 46,
        text: "A morpheme can be free or bound.",
        options: { a: "True", b: "False" },
        correct: "a"
    },
    {
        id: 47,
        text: "Inflectional morphemes create new words.",
        options: { a: "True", b: "False" },
        correct: "b"
    },
    {
        id: 48,
        text: "Compounding is a process of word formation.",
        options: { a: "True", b: "False" },
        correct: "a"
    },
    {
        id: 49,
        text: "A simple sentence has only one clause.",
        options: { a: "True", b: "False" },
        correct: "a"
    },
    {
        id: 50,
        text: "Syntax studies how words are arranged to form sentences.",
        options: { a: "True", b: "False" },
        correct: "a"
    },
    {
        id: 51,
        text: "Concord in grammar refers to the relationship between:",
        options: { a: "Words and sounds", b: "Subject and verb", c: "Tense and aspect", d: "Meaning and context" },
        correct: "b"
    },
    {
        id: 52,
        text: "In the sentence “She runs every morning,” the verb agrees with the:",
        options: { a: "Object", b: "Subject", c: "Adverb", d: "Predicate" },
        correct: "b"
    },
    {
        id: 53,
        text: "Which sentence demonstrates correct subject–verb concord?",
        options: { a: "The boy run fast.", b: "The boys runs fast.", c: "The boy runs fast.", d: "The boys runned fast." },
        correct: "c"
    },
    {
        id: 54,
        text: "When the subject is singular, the verb should be:",
        options: { a: "Plural", b: "Past", c: "Singular", d: "Continuous." },
        correct: "c"
    },
    {
        id: 55,
        text: "A collective noun may take a singular or plural verb depending on:",
        options: { a: "Spelling", b: "Meaning in context", c: "Length of the sentence", d: "Tense." },
        correct: "b"
    },
    {
        id: 56,
        text: "In “The team are arguing among themselves,” the verb is plural because the team is seen as:",
        options: { a: "One unit", b: "Individuals", c: "An object", d: "A place." },
        correct: "b"
    },
    {
        id: 57,
        text: "Words like each, everyone, and someone take a:",
        options: { a: "Plural verb", b: "Singular verb", c: "Past verb", d: "Continuous verb." },
        correct: "b"
    },
    {
        id: 58,
        text: "In the sentence “Neither of the answers is correct,” the verb agrees with:",
        options: { a: "Answers", b: "Neither", c: "Correct", d: "Of." },
        correct: "b"
    },
    {
        id: 59,
        text: "When two singular nouns are joined by and, the verb is usually:",
        options: { a: "Singular", b: "Plural", c: "Past", d: "Optional." },
        correct: "b"
    },
    {
        id: 60,
        text: "When two nouns refer to the same person or thing, the verb is:",
        options: { a: "Plural", b: "Singular", c: "Continuous", d: "Perfect." },
        correct: "b"
    },
    {
        id: 61,
        text: "A noun is a word that names a:",
        options: { a: "Action", b: "Quality", c: "Person, place, or thing", d: "Description." },
        correct: "c"
    },
    {
        id: 62,
        text: "Which of the following is a verb?",
        options: { a: "Beauty", b: "Quickly", c: "Run", d: "Happy." },
        correct: "c"
    },
    {
        id: 63,
        text: "Adjectives are used to describe:",
        options: { a: "Verbs", b: "Nouns", c: "Pronouns only", d: "Conjunctions." },
        correct: "b"
    },
    {
        id: 64,
        text: "Which word is an adverb?",
        options: { a: "Care", b: "Careful", c: "Carefully", d: "Caring." },
        correct: "c"
    },
    {
        id: 65,
        text: "Pronouns are used to replace:",
        options: { a: "Verbs", b: "Adverbs", c: "Nouns", d: "Adjectives." },
        correct: "c"
    },
    {
        id: 66,
        text: "Which of the following is a conjunction?",
        options: { a: "And", b: "Very", c: "Quickly", d: "Teacher." },
        correct: "a"
    },
    {
        id: 67,
        text: "Prepositions show the relationship between a noun and:",
        options: { a: "A verb", b: "Another word in the sentence", c: "A sentence", d: "A paragraph." },
        correct: "b"
    },
    {
        id: 68,
        text: "Which sentence contains a preposition?",
        options: { a: "She sings beautifully.", b: "The book is on the table.", c: "He runs fast.", d: "They laughed loudly." },
        correct: "b"
    },
    {
        id: 69,
        text: "An interjection expresses:",
        options: { a: "Action", b: "Emotion", c: "Description", d: "Time" },
        correct: "b"
    },
    {
        id: 70,
        text: "Words like oh!, wow!, and alas! are examples of:",
        options: { a: "Conjunctions", b: "Adverbs", c: "Interjections", d: "Prepositions." },
        correct: "c"
    },
    {
        id: 71,
        text: "A declarative sentence is used to:",
        options: { a: "Ask a question", b: "Give a command", c: "Make a statement", d: "Express emotion." },
        correct: "c"
    },
    {
        id: 72,
        text: "An interrogative sentence usually ends with a:",
        options: { a: "Full stop", b: "Comma", c: "Question mark", d: "Exclamation mark." },
        correct: "c"
    },
    {
        id: 73,
        text: "Imperative sentences are used to:",
        options: { a: "Ask questions", b: "Give commands or requests", c: "Make statements", d: "Describe nouns." },
        correct: "b"
    },
    {
        id: 74,
        text: "An exclamatory sentence expresses:",
        options: { a: "Time", b: "Emotion or strong feeling", c: "Place", d: "Agreement." },
        correct: "b"
    },
    {
        id: 75,
        text: "Which sentence is imperative?",
        options: { a: "She is coming tomorrow.", b: "Are you ready?", c: "Close the door.", d: "What a beautiful day!" },
        correct: "c"
    },
    {
        id: 76,
        text: "Which punctuation mark is commonly used with exclamatory sentences?",
        options: { a: "Full stop", b: "Comma", c: "Question mark", d: "Exclamation mark." },
        correct: "d"
    },
    {
        id: 77,
        text: "Sentence functions help convey the speaker’s:",
        options: { a: "Handwriting", b: "Intention", c: "Accent", d: "Speed." },
        correct: "b"
    },
    {
        id: 78,
        text: "A question that does not require an answer is called a:",
        options: { a: "Direct question", b: "Rhetorical question", c: "Indirect question", d: "Tag question." },
        correct: "b"
    },
    {
        id: 79,
        text: "Tag questions are used mainly to:",
        options: { a: "Give information", b: "Emphasize commands", c: "Seek confirmation", d: "Change tense." },
        correct: "c"
    },
    {
        id: 80,
        text: "In “You are coming, aren’t you?” the tag question is used to:",
        options: { a: "Command", b: "Insult", c: "Confirm information", d: "End the sentence" },
        correct: "c"
    },
    {
        id: 81,
        text: "Concord ensures agreement between subject and verb.",
        options: { a: "True", b: "False" },
        correct: "a"
    },
    {
        id: 82,
        text: "Collective nouns always take plural verbs.",
        options: { a: "True", b: "False" },
        correct: "b"
    },
    {
        id: 83,
        text: "Everyone and somebody take plural verbs.",
        options: { a: "True", b: "False" },
        correct: "b"
    },
    {
        id: 84,
        text: "Adjectives can modify nouns.",
        options: { a: "True", b: "False" },
        correct: "a"
    },
    {
        id: 85,
        text: "Adverbs can modify verbs, adjectives, and other adverbs.",
        options: { a: "True", b: "False" },
        correct: "a"
    },
    {
        id: 86,
        text: "Prepositions usually show position or direction.",
        options: { a: "True", b: "False" },
        correct: "a"
    },
    {
        id: 87,
        text: "Imperative sentences usually have a stated subject.",
        options: { a: "True", b: "False" },
        correct: "b"
    },
    {
        id: 88,
        text: "Declarative sentences make statements.",
        options: { a: "True", b: "False" },
        correct: "a"
    },
    {
        id: 89,
        text: "Interjections express emotion.",
        options: { a: "True", b: "False" },
        correct: "a"
    },
    {
        id: 90,
        text: "Tag questions are used to seek confirmation.",
        options: { a: "True", b: "False" },
        correct: "a"
    },
    {
        id: 91,
        text: "Effective communication depends on clarity and:",
        options: { a: "Speed", b: "Accuracy", c: "Noise", d: "Volume." },
        correct: "b"
    },
    {
        id: 92,
        text: "Grammar helps speakers convey meaning more:",
        options: { a: "Confusingly", b: "Clearly", c: "Slowly", d: "Loudly." },
        correct: "b"
    },
    {
        id: 93,
        text: "The primary purpose of language is to:",
        options: { a: "Decorate speech", b: "Communicate ideas", c: "Confuse listeners", d: "Memorize rules." },
        correct: "b"
    },
    {
        id: 94,
        text: "Formal English is commonly used in:",
        options: { a: "Text messages", b: "Academic writing", c: "Casual conversations", d: "Social media chats." },
        correct: "b"
    },
    {
        id: 95,
        text: "Informal English is suitable for:",
        options: { a: "Official letters", b: "Examination scripts", c: "Friendly conversations", d: "Legal documents." },
        correct: "c"
    },
    {
        id: 96,
        text: "Register refers to language variation according to:",
        options: { a: "Sound", b: "Situation and context", c: "Alphabet", d: "Spelling." },
        correct: "b"
    },
    {
        id: 97,
        text: "Academic English is usually:",
        options: { a: "Casual and emotional", b: "Structured and objective", c: "Slang-filled", d: "Personal." },
        correct: "b"
    },
    {
        id: 98,
        text: "Choice of words in communication should suit the:",
        options: { a: "Speaker only", b: "Listener and situation", c: "Grammar rules only", d: "Length of sentence" },
        correct: "b"
    },
    {
        id: 99,
        text: "Good command of English improves:",
        options: { a: "Guessing ability", b: "Communication skills", c: "Memorization", d: "Accent only." },
        correct: "b"
    },
    {
        id: 100,
        text: "Language is best described as a system of:",
        options: { a: "Random sounds", b: "Symbols used for communication", c: "Letters only", d: "Rules without meaning" },
        correct: "b"
    }
];

// 2. THE LOGIC
const quizContainer = document.getElementById('quiz-container');
const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('results');

// Render Questions on Load
function init() {
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.classList.add('question-card');
        div.innerHTML = `
            <h3>${index + 1}. ${q.text}</h3>
            <div class="options">
                ${Object.keys(q.options).map(key => `
                    <label>
                        <input type="radio" name="q${q.id}" value="${key}">
                        ${key.toUpperCase()}. ${q.options[key]}
                    </label>
                `).join('')}
            </div>
            <div id="feedback-${q.id}" class="answer-key hidden"></div>
        `;
        quizContainer.appendChild(div);
    });
    document.getElementById('total').innerText = questions.length;
}

// Handle Submission
quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;

    questions.forEach(q => {
        const selected = document.querySelector(`input[name="q${q.id}"]:checked`);
        const feedback = document.getElementById(`feedback-${q.id}`);
        const card = feedback.parentElement;

        card.classList.remove('correct', 'wrong'); // Reset
        feedback.classList.remove('hidden');

        if (selected && selected.value === q.correct) {
            score++;
            card.classList.add('correct');
            feedback.innerText = "✔ Correct!";
            feedback.style.color = "green";
        } else {
            card.classList.add('wrong');
            feedback.innerText = `✘ Correct Answer: ${q.correct.toUpperCase()}`;
            feedback.style.color = "red";
        }
    });

    document.getElementById('score').innerText = score;
    resultDiv.classList.remove('hidden');
    window.scrollTo(0, 0); // Scroll to top
});

init();