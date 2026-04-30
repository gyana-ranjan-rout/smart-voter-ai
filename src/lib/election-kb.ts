import { KnowledgeEntry } from '@/types';

export const electionKB: KnowledgeEntry[] = [
  {
    keywords: ['how', 'vote', 'voting', 'cast'],
    response: "Here's how you can vote in Indian elections:\n\n1. **Check your eligibility** — You must be 18+ and an Indian citizen\n2. **Register** — Fill Form 6 on the NVSP portal (nvsp.in)\n3. **Get your Voter ID** — You'll receive your EPIC card after verification\n4. **Find your booth** — Use the Voter Helpline app\n5. **On election day** — Carry your ID, go to your booth, press the button next to your candidate on the EVM\n\nIt's that simple! Would you like details on any specific step?",
    eli10Response: "Voting is like choosing your class monitor, but for the whole country! 🗳️\n\nFirst, you need to be at least 18 years old. Then you sign up (register) to get a special card. On voting day, you go to a special place (polling booth), and press a button next to the person you want to lead. That's it! Your choice is secret and nobody can see it.",
    category: 'voting',
    followUp: ['What documents do I need?', 'How do I register?', 'Where is my polling booth?']
  },
  {
    keywords: ['eligible', 'eligibility', 'can i vote', 'qualify', 'who can vote'],
    response: "To be eligible to vote in India, you need to meet these conditions:\n\n✅ **Age**: You must be 18 years or older\n✅ **Citizenship**: You must be an Indian citizen\n✅ **Registration**: Your name must be on the electoral roll\n✅ **Residency**: You should be a resident of the constituency\n✅ **Not disqualified**: You should not be disqualified under any law\n\nIf you meet all these conditions, you're eligible to vote! Would you like help with registration?",
    eli10Response: "Can you vote? Let's check! ✅\n\n1. Are you 18 or older? \n2. Are you from India?\n3. Did you sign up to vote?\n\nIf you said yes to all three — you can vote! It's like getting a ticket to a really important game where YOU get to pick the team captain for the whole country!",
    category: 'eligibility',
    followUp: ['How do I register?', 'What if I\'m an NRI?', 'What documents do I need?']
  },
  {
    keywords: ['document', 'documents', 'id proof', 'what do i need', 'papers', 'id card'],
    response: "Here are the documents you'll need:\n\n**For Registration (Form 6):**\n📄 Passport-size photograph\n📄 Proof of age (birth certificate, school certificate, or passport)\n📄 Proof of address (Aadhaar, utility bill, ration card, or passport)\n\n**For Voting Day (any ONE of these):**\n🪪 Voter ID Card (EPIC)\n🪪 Aadhaar Card\n🪪 Passport\n🪪 Driving License\n🪪 PAN Card\n🪪 Any government-issued photo ID\n\nAll documents should be self-attested for registration.",
    eli10Response: "Think of it like going to a fun park — you need a ticket to get in! 🎫\n\nTo sign up to vote, you need:\n- Your photo\n- Something that shows how old you are\n- Something that shows where you live\n\nOn voting day, just bring one card with your photo on it — like an Aadhaar card or your special Voter ID card!",
    category: 'documents',
    followUp: ['How do I register?', 'Where can I get a Voter ID?', 'Can I vote without Voter ID?']
  },
  {
    keywords: ['register', 'registration', 'sign up', 'enroll', 'form 6', 'nvsp'],
    response: "Here's how to register as a voter:\n\n**Online Method:**\n1. Visit **nvsp.in** (National Voters Service Portal)\n2. Click on 'New Voter Registration'\n3. Fill **Form 6** with your details\n4. Upload your photo and documents\n5. Submit and note your reference number\n\n**Offline Method:**\n1. Visit your nearest ERO (Electoral Registration Officer) office\n2. Collect and fill Form 6\n3. Attach required documents\n4. Submit at the office\n\n**After submission**, a BLO (Booth Level Officer) will visit your address for verification. Registration typically takes 2-4 weeks.",
    eli10Response: "Registering to vote is like signing up for a library card! 📚\n\n1. Go to a website called **nvsp.in**\n2. Fill in your name, address, and age\n3. Upload your photo\n4. Click submit!\n\nThen someone will come to your house to check everything is correct. After that, you'll get a special voter card in the mail! It usually takes about 2-4 weeks.",
    category: 'registration',
    followUp: ['What documents do I need?', 'How long does it take?', 'How do I check my status?']
  },
  {
    keywords: ['evm', 'electronic voting machine', 'machine', 'button', 'how to press'],
    response: "The **EVM (Electronic Voting Machine)** is India's voting device:\n\n**How it works:**\n1. The EVM has two parts — Control Unit (with officer) and Ballot Unit (in your compartment)\n2. The Ballot Unit shows candidate names, parties, and symbols\n3. Press the **blue button** next to your chosen candidate\n4. You'll hear a **beep** and see a **light** — this confirms your vote\n5. The **VVPAT** machine shows a paper slip with your vote for 7 seconds\n\n**Key facts:**\n- Each EVM can record up to 2,000 votes\n- EVMs are tamper-proof and not connected to the internet\n- You can only press one button — the machine locks after that\n\nWant to try it? Check out our **Mock Voting Demo**!",
    eli10Response: "The EVM is like a special remote control for voting! 🎮\n\nIt shows a list of people who want to be the leader. Each person has a picture next to them. You just press the button next to the person you like!\n\nWhen you press it:\n- It goes BEEP! 🔔\n- A little light turns on 💡\n- A paper slip shows your choice for a few seconds\n\nAnd that's it! Your vote is saved inside the machine and nobody can see it!",
    category: 'voting',
    followUp: ['What is VVPAT?', 'What is NOTA?', 'Try the mock voting demo']
  },
  {
    keywords: ['nota', 'none of the above', 'reject', 'no candidate'],
    response: "**NOTA** stands for **None of the Above**.\n\nIt's a special option on the EVM that lets you reject all candidates:\n\n✅ It's your democratic right to use NOTA\n✅ Your identity remains secret\n✅ NOTA is always the last option on the EVM\n❌ Even if NOTA gets the most votes, the candidate with the highest votes among the contestants wins\n\n**When to use NOTA:**\nIf you don't want to vote for any candidate but still want to participate in the democratic process, choose NOTA. It sends a message that voters are not satisfied with any of the options.",
    eli10Response: "NOTA is like saying 'I don't like any of these choices!' 🙅\n\nImagine your class is voting for class monitor, but you don't think any of the candidates would be a good monitor. Instead of not voting at all, you can press the NOTA button to say 'none of these, please!'\n\nIt's always the last option on the voting machine. It's a way to participate without choosing anyone!",
    category: 'voting',
    followUp: ['How does the EVM work?', 'What happens to NOTA votes?', 'Can I skip voting?']
  },
  {
    keywords: ['polling booth', 'booth', 'station', 'where to vote', 'find', 'locate'],
    response: "Here's how to find your polling booth:\n\n**Online:**\n1. Visit **nvsp.in** and click 'Search in Electoral Roll'\n2. Enter your Voter ID number or personal details\n3. Your assigned booth details will be displayed\n\n**Mobile App:**\n1. Download the **Voter Helpline** app (available on Android & iOS)\n2. Search using your EPIC number or name\n3. Get booth address, map location, and directions\n\n**By SMS:**\nSend SMS: **EPIC <your voter ID number>** to 1950\n\n**Important:** Your booth is assigned based on your registered address — you cannot choose a different one.",
    eli10Response: "Finding your voting place is like finding your exam center! 🏫\n\n1. Go to the website **nvsp.in**\n2. Type in your voter card number\n3. It will tell you exactly where to go!\n\nOr you can download an app called 'Voter Helpline' on your phone — it even shows you a map! 🗺️",
    category: 'voting',
    followUp: ['What should I carry on voting day?', 'What time does voting start?', 'How do I register?']
  },
  {
    keywords: ['result', 'results', 'counting', 'who won', 'winner'],
    response: "**How election results work:**\n\n📊 **Counting Day:**\n- Usually a few days after the last polling phase\n- Counting starts early morning (around 8 AM)\n- EVMs are opened in the presence of candidates' agents\n\n📱 **Where to check results:**\n- **ECI website**: results.eci.gov.in\n- **Voter Helpline App**\n- TV news channels provide live coverage\n\n📋 **The process:**\n1. Postal ballots are counted first\n2. Then EVM votes are counted round by round\n3. VVPAT slips of 5 random booths per constituency are verified\n4. Results are declared constituency by constituency\n\nMost results are clear by evening of counting day.",
    eli10Response: "After everyone votes, it's time to count! 🧮\n\nThink of it like counting who got the most votes for class monitor:\n1. Officials open the voting machines\n2. They count the votes one by one\n3. Whichever person gets the most votes — they win!\n\nYou can watch the results live on TV or on the internet. It's like watching the scoreboard of a really big game! 🏆",
    category: 'results',
    followUp: ['How are votes counted?', 'What is VVPAT?', 'When are results declared?']
  },
  {
    keywords: ['online voting', 'internet voting', 'vote from home', 'remote voting'],
    response: "**Can I vote online? No, not currently.**\n\n❌ India does not have online/internet voting for any election\n❌ You must physically visit your assigned polling station\n\n**What you CAN do online:**\n✅ Register as a voter (nvsp.in)\n✅ Check your name in the electoral roll\n✅ Find your polling booth location\n✅ Track your registration status\n✅ Download e-EPIC (digital Voter ID)\n✅ File complaints with the Election Commission\n\n**Why no online voting?**\nThe Election Commission prioritizes security and verifiability. EVMs and VVPAT provide a physical, auditable trail that online systems cannot easily replicate.",
    eli10Response: "Can you vote from your computer or phone? Not yet! 🖥️❌\n\nRight now, you have to go to a special place (polling booth) and press a button on a machine. It's like how you have to go to school for exams — you can't do it from home!\n\nBut you CAN use the internet to sign up to vote and find out where to go. Maybe someday we'll be able to vote online, but not right now!",
    category: 'general',
    followUp: ['How do I find my polling booth?', 'What should I carry?', 'How does the EVM work?']
  },
  {
    keywords: ['deadline', 'miss', 'late', 'last date', 'missed'],
    response: "**What if you miss the registration deadline?**\n\n⚠️ If you miss the deadline for an upcoming election:\n- You **cannot vote** in that particular election\n- But you CAN still register for future elections\n\n**Good news:**\n- Electoral rolls are revised regularly throughout the year\n- You can apply for inclusion anytime via nvsp.in\n- Special revision drives are conducted before major elections\n\n**Pro tip:** Don't wait for election announcements! Register as soon as you turn 18. The electoral roll is continuously updated, so register now to avoid missing any future election.",
    eli10Response: "Oh no, you're late! ⏰\n\nIt's like if you forgot to sign up for a school trip — you might miss THIS trip, but you can sign up for the next one!\n\nIf you missed the deadline:\n- You can't vote THIS time 😢\n- But sign up RIGHT NOW for next time! 🎉\n- Go to nvsp.in and register\n\nThe best advice? Sign up as soon as you can, so you never miss out!",
    category: 'registration',
    followUp: ['How do I register now?', 'When is the next election?', 'How do I check my status?']
  },
  {
    keywords: ['vvpat', 'paper trail', 'verification', 'slip'],
    response: "**VVPAT** stands for **Voter Verifiable Paper Audit Trail**.\n\n📄 **What it does:**\n- When you press a button on the EVM, the VVPAT prints a paper slip\n- The slip shows the candidate's name, serial number, and party symbol\n- It's displayed behind a glass window for **7 seconds**\n- Then it drops into a sealed box\n\n🔍 **Why it matters:**\n- It lets you verify that your vote was recorded correctly\n- It provides a paper trail for auditing\n- Currently, VVPAT slips of 5 randomly selected booths per constituency are matched with EVM results\n\n✅ If your VVPAT slip shows the correct candidate, your vote is safe!",
    eli10Response: "VVPAT is like a receipt for your vote! 🧾\n\nWhen you press the button on the voting machine:\n1. A little paper slip prints out behind a window\n2. It shows who you voted for\n3. You can see it for 7 seconds to make sure it's right\n4. Then it falls into a locked box\n\nIt's like when you buy ice cream and get a receipt — it proves what you chose! 🍦",
    category: 'voting',
    followUp: ['How does the EVM work?', 'Are EVMs safe?', 'How are votes counted?']
  },
  {
    keywords: ['first time', 'new voter', 'beginner', 'never voted', '18'],
    response: "**Welcome, first-time voter!** 🎉\n\nHere's your quick start guide:\n\n**Step 1:** Make sure you're 18+ and have these ready:\n- Passport-size photo\n- Aadhaar card or birth certificate\n- Address proof\n\n**Step 2:** Register at **nvsp.in** (Fill Form 6)\n\n**Step 3:** Wait for verification (2-4 weeks)\n\n**Step 4:** Download your e-EPIC from the NVSP portal\n\n**Step 5:** Find your booth using the Voter Helpline app\n\n**Step 6:** On election day, carry your ID and vote!\n\n💡 **Pro tip:** Try our **Mock Voting Demo** to practice before the real day!\n\nYou're about to participate in the world's largest democracy — that's exciting! 🇮🇳",
    eli10Response: "Yay, you're going to vote for the first time! 🎉🎊\n\nIt's super easy — like signing up for a new game:\n\n1. 📸 Take a nice photo\n2. 📝 Sign up at nvsp.in\n3. 💳 Get your special voter card\n4. 🗺️ Find out where to go\n5. 🗳️ Press the button and vote!\n\nAnd guess what? We have a practice game here where you can try voting before the real day! Check out our Demo section! 🎮",
    category: 'general',
    followUp: ['How do I register?', 'What documents do I need?', 'Try the mock voting demo']
  },
];

export function findBestMatch(query: string, eli10: boolean): { response: string; suggestions: string[] } {
  const normalizedQuery = query.toLowerCase().trim();

  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of electionKB) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (normalizedQuery.includes(keyword.toLowerCase())) {
        score += keyword.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore > 2) {
    return {
      response: eli10 ? bestMatch.eli10Response : bestMatch.response,
      suggestions: bestMatch.followUp,
    };
  }

  const defaultResponse = eli10
    ? "Hmm, I'm not sure about that one! 🤔 But here are some things I can help you with — just pick one!\n\nI know a lot about:\n- How to vote\n- Who can vote\n- What you need to bring\n- How the voting machine works\n- What happens after voting"
    : "I'm not sure I have a specific answer for that, but I'd love to help! Here are some topics I can assist with:\n\n- **Voter eligibility** and requirements\n- **Registration** process and forms\n- **Voting day** procedures\n- **EVM** and VVPAT details\n- **Election results** and counting\n\nTry asking something specific like \"How do I register to vote?\" or \"What documents do I need?\"";

  return {
    response: defaultResponse,
    suggestions: ['How do I vote?', 'Am I eligible?', 'What documents do I need?', 'How does the EVM work?'],
  };
}
