import { GuideStep, TimelineEvent, FAQItem, Candidate } from '@/types';

export const guideSteps: GuideStep[] = [
  {
    id: 1, title: 'Check Eligibility', titleHi: 'पात्रता जांचें',
    description: 'Verify that you meet the requirements to vote in your constituency.',
    descriptionHi: 'सत्यापित करें कि आप अपने निर्वाचन क्षेत्र में वोट देने की आवश्यकताओं को पूरा करते हैं।',
    icon: 'shield-check',
    details: ['You must be an Indian citizen', 'You must be 18 years or older on the qualifying date', 'You must be a resident of the constituency where you want to vote', 'You should not be disqualified under any law'],
    detailsHi: ['आपको भारतीय नागरिक होना चाहिए', 'आपकी आयु 18 वर्ष या अधिक होनी चाहिए', 'आप उस निर्वाचन क्षेत्र के निवासी होने चाहिए', 'आपको किसी कानून के तहत अयोग्य नहीं होना चाहिए'],
    completed: false,
    checklist: [
      { id: 'e1', label: 'I am 18 years or older', labelHi: 'मैं 18 वर्ष या उससे अधिक हूं', checked: false },
      { id: 'e2', label: 'I am an Indian citizen', labelHi: 'मैं भारतीय नागरिक हूं', checked: false },
      { id: 'e3', label: 'I have a valid address proof', labelHi: 'मेरे पास वैध पता प्रमाण है', checked: false },
    ],
  },
  {
    id: 2, title: 'Register as a Voter', titleHi: 'मतदाता के रूप में पंजीकरण करें',
    description: 'Fill out Form 6 online or offline to get your name in the electoral roll.',
    descriptionHi: 'निर्वाचक नामावली में अपना नाम दर्ज कराने के लिए फॉर्म 6 भरें।',
    icon: 'user-plus',
    details: ['Visit the National Voters Service Portal (NVSP)', 'Fill Form 6 for new registration', 'Attach passport-size photo and address proof', 'Submit online or at your nearest ERO office', 'Track your application status online'],
    detailsHi: ['राष्ट्रीय मतदाता सेवा पोर्टल (NVSP) पर जाएं', 'नए पंजीकरण के लिए फॉर्म 6 भरें', 'पासपोर्ट साइज़ फोटो और पता प्रमाण संलग्न करें', 'ऑनलाइन या ERO कार्यालय में जमा करें', 'अपने आवेदन की स्थिति ऑनलाइन ट्रैक करें'],
    completed: false,
    checklist: [
      { id: 'r1', label: 'Visited NVSP website', labelHi: 'NVSP वेबसाइट पर गया', checked: false },
      { id: 'r2', label: 'Filled Form 6', labelHi: 'फॉर्म 6 भरा', checked: false },
      { id: 'r3', label: 'Submitted documents', labelHi: 'दस्तावेज जमा किए', checked: false },
    ],
  },
  {
    id: 3, title: 'Get Voter ID Card', titleHi: 'वोटर आईडी कार्ड प्राप्त करें',
    description: 'Receive your EPIC (Electoral Photo Identity Card) after verification.',
    descriptionHi: 'सत्यापन के बाद अपना EPIC (निर्वाचक फोटो पहचान पत्र) प्राप्त करें।',
    icon: 'credit-card',
    details: ['After form submission, a BLO will visit for verification', 'Your name will be added to the electoral roll', 'Download e-EPIC from the NVSP portal', 'Physical card will be delivered to your address', 'You can also use 12 other ID proofs for voting'],
    detailsHi: ['फॉर्म जमा करने के बाद BLO सत्यापन के लिए आएगा', 'आपका नाम मतदाता सूची में जोड़ा जाएगा', 'NVSP पोर्टल से e-EPIC डाउनलोड करें', 'कार्ड आपके पते पर भेजा जाएगा', 'वोटिंग के लिए 12 अन्य ID प्रमाण भी मान्य हैं'],
    completed: false,
    checklist: [
      { id: 'v1', label: 'BLO verification done', labelHi: 'BLO सत्यापन हो गया', checked: false },
      { id: 'v2', label: 'Downloaded e-EPIC', labelHi: 'e-EPIC डाउनलोड किया', checked: false },
    ],
  },
  {
    id: 4, title: 'Find Your Polling Booth', titleHi: 'अपना मतदान केंद्र खोजें',
    description: 'Locate your assigned polling station before election day.',
    descriptionHi: 'चुनाव दिवस से पहले अपना निर्धारित मतदान केंद्र खोजें।',
    icon: 'map-pin',
    details: ['Use the Voter Helpline App or NVSP portal', 'Enter your EPIC number or name to find your booth', 'Note down the booth number and address', 'Visit the booth before election day to familiarize yourself', 'Check booth timings (usually 7 AM to 6 PM)'],
    detailsHi: ['Voter Helpline ऐप या NVSP पोर्टल का उपयोग करें', 'बूथ खोजने के लिए EPIC नंबर या नाम दर्ज करें', 'बूथ नंबर और पता नोट करें', 'चुनाव दिवस से पहले बूथ पर जाएं', 'बूथ का समय जांचें (आमतौर पर सुबह 7 से शाम 6 बजे)'],
    completed: false,
    checklist: [
      { id: 'p1', label: 'Found my polling booth', labelHi: 'अपना मतदान केंद्र मिल गया', checked: false },
      { id: 'p2', label: 'Noted the address', labelHi: 'पता नोट किया', checked: false },
    ],
  },
  {
    id: 5, title: 'Vote on Election Day', titleHi: 'चुनाव दिवस पर वोट करें',
    description: 'Cast your vote at the polling station using the EVM.',
    descriptionHi: 'EVM का उपयोग करके मतदान केंद्र पर अपना वोट डालें।',
    icon: 'vote',
    details: ['Carry your Voter ID or any approved photo ID', 'Go to your assigned polling booth', 'Stand in the queue and wait for your turn', 'Get your finger inked after identity verification', 'Press the button next to your preferred candidate on the EVM', 'Verify your vote on the VVPAT slip', 'Collect your voter slip and leave'],
    detailsHi: ['अपना वोटर ID या कोई मान्य फोटो ID ले जाएं', 'अपने निर्धारित मतदान केंद्र पर जाएं', 'कतार में खड़े होकर अपनी बारी का इंतजार करें', 'पहचान सत्यापन के बाद उंगली पर स्याही लगवाएं', 'EVM पर अपने पसंदीदा उम्मीदवार के बगल में बटन दबाएं', 'VVPAT स्लिप पर अपना वोट सत्यापित करें', 'अपनी पर्ची लें और जाएं'],
    completed: false,
    checklist: [
      { id: 'd1', label: 'Carried valid photo ID', labelHi: 'वैध फोटो ID ले गया', checked: false },
      { id: 'd2', label: 'Cast my vote', labelHi: 'अपना वोट डाला', checked: false },
      { id: 'd3', label: 'Verified on VVPAT', labelHi: 'VVPAT पर सत्यापित किया', checked: false },
    ],
  },
  {
    id: 6, title: 'Track Results', titleHi: 'परिणाम ट्रैक करें',
    description: 'Follow the counting process and view election results.',
    descriptionHi: 'मतगणना प्रक्रिया का पालन करें और चुनाव परिणाम देखें।',
    icon: 'bar-chart-3',
    details: ['Results are usually declared on counting day', 'Watch live updates on Election Commission website', 'Results are available constituency-wise', 'Final results are published in the official gazette', 'You can verify results on the ECI results portal'],
    detailsHi: ['परिणाम आमतौर पर मतगणना दिवस पर घोषित होते हैं', 'चुनाव आयोग की वेबसाइट पर लाइव अपडेट देखें', 'परिणाम निर्वाचन क्षेत्र-वार उपलब्ध हैं', 'अंतिम परिणाम आधिकारिक राजपत्र में प्रकाशित होते हैं', 'ECI परिणाम पोर्टल पर परिणाम सत्यापित करें'],
    completed: false,
    checklist: [
      { id: 't1', label: 'Checked results online', labelHi: 'ऑनलाइन परिणाम देखे', checked: false },
    ],
  },
];

export const timelineEvents: TimelineEvent[] = [
  { id: 'tl1', date: 'Jan 15', title: 'Election Announced', titleHi: 'चुनाव घोषित', description: 'Election Commission announces the schedule and code of conduct comes into effect.', descriptionHi: 'चुनाव आयोग कार्यक्रम की घोषणा करता है और आचार संहिता लागू होती है।', status: 'completed', icon: 'megaphone' },
  { id: 'tl2', date: 'Jan 20', title: 'Nomination Filing', titleHi: 'नामांकन दाखिल', description: 'Candidates file their nomination papers with the returning officer.', descriptionHi: 'उम्मीदवार निर्वाचन अधिकारी के पास नामांकन पत्र दाखिल करते हैं।', status: 'completed', icon: 'file-text' },
  { id: 'tl3', date: 'Jan 28', title: 'Scrutiny of Nominations', titleHi: 'नामांकन की जांच', description: 'Filed nominations are scrutinized for validity and eligibility.', descriptionHi: 'दाखिल नामांकन की वैधता और पात्रता की जांच की जाती है।', status: 'completed', icon: 'search' },
  { id: 'tl4', date: 'Feb 1', title: 'Last Date to Withdraw', titleHi: 'वापसी की अंतिम तिथि', description: 'Candidates can withdraw their nominations before this date.', descriptionHi: 'उम्मीदवार इस तिथि से पहले अपना नामांकन वापस ले सकते हैं।', status: 'completed', icon: 'x-circle' },
  { id: 'tl5', date: 'Feb 5', title: 'Campaign Period', titleHi: 'प्रचार अवधि', description: 'Active campaigning by candidates and political parties.', descriptionHi: 'उम्मीदवारों और राजनीतिक दलों द्वारा सक्रिय प्रचार।', status: 'active', icon: 'users' },
  { id: 'tl6', date: 'Feb 18', title: 'Campaign Ends', titleHi: 'प्रचार समाप्त', description: 'Campaigning must stop 48 hours before polling day.', descriptionHi: 'मतदान दिवस से 48 घंटे पहले प्रचार बंद होना चाहिए।', status: 'upcoming', icon: 'bell-off' },
  { id: 'tl7', date: 'Feb 20', title: 'Polling Day', titleHi: 'मतदान दिवस', description: 'Citizens cast their votes at designated polling stations.', descriptionHi: 'नागरिक निर्धारित मतदान केंद्रों पर अपना वोट डालते हैं।', status: 'upcoming', icon: 'check-square' },
  { id: 'tl8', date: 'Feb 25', title: 'Counting Day', titleHi: 'मतगणना दिवस', description: 'Votes are counted and results are declared.', descriptionHi: 'वोटों की गिनती होती है और परिणाम घोषित किए जाते हैं।', status: 'upcoming', icon: 'bar-chart-3' },
  { id: 'tl9', date: 'Feb 28', title: 'Results Declared', titleHi: 'परिणाम घोषित', description: 'Final results are officially announced and winners take oath.', descriptionHi: 'अंतिम परिणाम आधिकारिक रूप से घोषित होते हैं।', status: 'upcoming', icon: 'trophy' },
];

export const faqData: FAQItem[] = [
  { id: 'f1', category: 'eligibility', question: 'Who can vote in Indian elections?', questionHi: 'भारतीय चुनावों में कौन वोट कर सकता है?', answer: 'Any Indian citizen who is 18 years or older on the qualifying date and is registered in the electoral roll can vote. You must not be disqualified under any law, and you need to be a resident of the constituency where you are registered.', answerHi: 'कोई भी भारतीय नागरिक जो निर्धारित तिथि पर 18 वर्ष या उससे अधिक का है और निर्वाचक नामावली में पंजीकृत है, वोट कर सकता है।' },
  { id: 'f2', category: 'eligibility', question: 'What is the minimum age to vote?', questionHi: 'वोट देने की न्यूनतम आयु क्या है?', answer: 'The minimum voting age in India is 18 years. You must have turned 18 on or before the qualifying date (usually January 1st of the year the electoral roll is prepared).', answerHi: 'भारत में न्यूनतम मतदान आयु 18 वर्ष है।' },
  { id: 'f3', category: 'eligibility', question: 'Can NRIs vote in Indian elections?', questionHi: 'क्या NRI भारतीय चुनावों में वोट कर सकते हैं?', answer: 'Yes! NRIs can vote in Indian elections. Since 2011, NRIs can register as overseas electors. However, they need to be physically present at the polling booth to cast their vote. Postal ballot facility for NRIs has been proposed but not yet fully implemented.', answerHi: 'हां! NRI भारतीय चुनावों में वोट कर सकते हैं। उन्हें मतदान केंद्र पर व्यक्तिगत रूप से उपस्थित होना होगा।' },
  { id: 'f4', category: 'registration', question: 'How do I register to vote?', questionHi: 'मैं वोट के लिए पंजीकरण कैसे करूं?', answer: 'You can register online through the National Voters Service Portal (NVSP) at nvsp.in by filling Form 6. You\'ll need a passport-size photo, address proof, and age proof. You can also visit your nearest Electoral Registration Officer (ERO) to register offline.', answerHi: 'आप NVSP पोर्टल (nvsp.in) पर फॉर्म 6 भरकर ऑनलाइन पंजीकरण कर सकते हैं।' },
  { id: 'f5', category: 'registration', question: 'What documents do I need to register?', questionHi: 'पंजीकरण के लिए कौन से दस्तावेज चाहिए?', answer: 'You need: (1) A passport-size photograph, (2) Proof of age — birth certificate, school certificate, or passport, (3) Proof of address — Aadhaar card, utility bill, ration card, or passport. All documents should be self-attested.', answerHi: 'आपको चाहिए: पासपोर्ट साइज फोटो, आयु प्रमाण, और पता प्रमाण।' },
  { id: 'f6', category: 'registration', question: 'How long does voter registration take?', questionHi: 'मतदाता पंजीकरण में कितना समय लगता है?', answer: 'Typically, voter registration takes about 2-4 weeks. After you submit Form 6, a Booth Level Officer (BLO) will visit your address for verification. Once verified, your name is added to the electoral roll and you receive your Voter ID card.', answerHi: 'आमतौर पर मतदाता पंजीकरण में 2-4 सप्ताह लगते हैं।' },
  { id: 'f7', category: 'voting-day', question: 'What should I carry on voting day?', questionHi: 'मतदान दिवस पर क्या ले जाना चाहिए?', answer: 'You must carry a valid photo identity document. Accepted IDs include: Voter ID (EPIC), Aadhaar card, Passport, Driving License, PAN card, or any government-issued photo ID. Without a valid ID, you may not be allowed to vote.', answerHi: 'आपको वैध फोटो पहचान पत्र ले जाना होगा — वोटर ID, आधार, पासपोर्ट, ड्राइविंग लाइसेंस, आदि।' },
  { id: 'f8', category: 'voting-day', question: 'How does the EVM (Electronic Voting Machine) work?', questionHi: 'EVM कैसे काम करती है?', answer: 'The EVM has two units: the Control Unit (with the polling officer) and the Ballot Unit (in the voting compartment). You press the blue button next to your chosen candidate\'s name and symbol. A beep sound and a light confirm your vote. The VVPAT machine shows a paper slip with your vote for 7 seconds for verification.', answerHi: 'EVM में दो यूनिट होती हैं। आप अपने चुने हुए उम्मीदवार के बगल में नीला बटन दबाते हैं। बीप और लाइट से वोट की पुष्टि होती है।' },
  { id: 'f9', category: 'voting-day', question: 'Can I vote online?', questionHi: 'क्या मैं ऑनलाइन वोट कर सकता हूं?', answer: 'No, currently there is no provision for online voting in Indian elections. You must physically visit your assigned polling station to cast your vote. However, you can do many pre-voting tasks online like registration, finding your booth, and checking your name in the electoral roll.', answerHi: 'नहीं, वर्तमान में भारतीय चुनावों में ऑनलाइन मतदान की कोई व्यवस्था नहीं है।' },
  { id: 'f10', category: 'voting-day', question: 'What if my name is not on the voter list?', questionHi: 'अगर मेरा नाम मतदाता सूची में नहीं है तो?', answer: 'If your name is missing, you cannot vote in that election. However, you should immediately apply for inclusion by filling Form 6 at the NVSP portal or your nearest ERO office. You can also file a complaint with the Election Commission. Make sure to check your name well before election day.', answerHi: 'अगर आपका नाम नहीं है तो आप उस चुनाव में वोट नहीं कर सकते। तुरंत NVSP पोर्टल पर फॉर्म 6 भरें।' },
  { id: 'f11', category: 'voting-day', question: 'What is NOTA?', questionHi: 'NOTA क्या है?', answer: 'NOTA stands for "None of the Above." It is an option on the EVM that allows you to reject all candidates. If you don\'t want to vote for any candidate, you can press the NOTA button. It is your democratic right to reject all options while still participating in the election.', answerHi: 'NOTA का अर्थ है "इनमें से कोई नहीं।" यह EVM पर एक विकल्प है जो आपको सभी उम्मीदवारों को अस्वीकार करने की अनुमति देता है।' },
  { id: 'f12', category: 'results', question: 'How are votes counted?', questionHi: 'वोटों की गिनती कैसे होती है?', answer: 'After polling ends, EVMs are sealed and stored securely. On counting day, EVMs are opened in the presence of candidates\' agents. Votes are counted electronically from the EVM. The VVPAT slips of randomly selected booths are also counted to verify. Results are declared constituency by constituency.', answerHi: 'मतदान समाप्त होने के बाद EVM सील कर दी जाती हैं। मतगणना दिवस पर EVM खोली जाती हैं और वोटों की गिनती होती है।' },
  { id: 'f13', category: 'results', question: 'When are results usually declared?', questionHi: 'परिणाम आमतौर पर कब घोषित होते हैं?', answer: 'Results are typically declared on the counting day itself, which is usually a few days after the last phase of polling. For general elections, counting begins early morning and most results are clear by evening. The Election Commission\'s website shows live updates.', answerHi: 'परिणाम आमतौर पर मतगणना दिवस पर ही घोषित हो जाते हैं।' },
  { id: 'f14', category: 'general', question: 'What is the Election Commission of India?', questionHi: 'भारत का चुनाव आयोग क्या है?', answer: 'The Election Commission of India (ECI) is an autonomous constitutional body responsible for administering all elections in India — from Parliament to Panchayat. It ensures free and fair elections, enforces the Model Code of Conduct, and manages the entire electoral process.', answerHi: 'भारत का चुनाव आयोग (ECI) एक स्वायत्त संवैधानिक निकाय है जो भारत में सभी चुनावों का संचालन करता है।' },
  { id: 'f15', category: 'general', question: 'What happens if I miss the deadline to register?', questionHi: 'अगर मैं पंजीकरण की समय सीमा चूक गया तो?', answer: 'If you miss the registration deadline for an upcoming election, unfortunately you cannot vote in that election. However, you can still register for future elections. The electoral rolls are revised regularly, and you can apply for inclusion at any time through the NVSP portal.', answerHi: 'अगर आप पंजीकरण की समय सीमा चूक गए, तो उस चुनाव में वोट नहीं कर सकते। लेकिन भविष्य के चुनावों के लिए पंजीकरण कर सकते हैं।' },
  { id: 'f16', category: 'general', question: 'Is voting compulsory in India?', questionHi: 'क्या भारत में मतदान अनिवार्य है?', answer: 'No, voting is not compulsory in India at the national level. It is a right, not a legal obligation. However, some states like Gujarat have provisions for compulsory voting in local body elections. The ECI encourages all eligible citizens to exercise their right to vote.', answerHi: 'नहीं, भारत में राष्ट्रीय स्तर पर मतदान अनिवार्य नहीं है। यह एक अधिकार है, कानूनी बाध्यता नहीं।' },
  { id: 'f17', category: 'general', question: 'Can I change my polling booth?', questionHi: 'क्या मैं अपना मतदान केंद्र बदल सकता हूं?', answer: 'You cannot choose your polling booth — it is assigned based on your registered address. If you have moved to a new address, you need to apply for transfer of registration by filling Form 6A. Once approved, you will be assigned a new polling booth near your new address.', answerHi: 'आप अपना मतदान केंद्र नहीं चुन सकते — यह आपके पंजीकृत पते के आधार पर निर्धारित होता है।' },
];

export const candidates: Candidate[] = [
  { id: 1, name: 'Priya Sharma', party: 'National Progress Party', symbol: '🌻', color: '#f59e0b' },
  { id: 2, name: 'Rahul Verma', party: 'People\'s Democratic Front', symbol: '🌹', color: '#ef4444' },
  { id: 3, name: 'Aisha Khan', party: 'Green Future Alliance', symbol: '🌿', color: '#10b981' },
  { id: 4, name: 'Vikram Singh', party: 'Unity Development Party', symbol: '⭐', color: '#3b82f6' },
  { id: 5, name: 'Meera Patel', party: 'Citizens\' Reform Movement', symbol: '🔔', color: '#8b5cf6' },
];

export const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Jammu & Kashmir', 'Ladakh',
];
