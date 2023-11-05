const questions = [
    {   "_id":1,
        "question": "Is it safe to use electronic devices during takeoff and landing?",
       " answer": "False"   
    },
    {
        "_id":2,
       "question": "Should your seatbelt be fastened whenever you are seated in case of turbulence?",
        "answer": "True"
    },
    {   
        "_id":3,
        "question": "Is it permitted to smoke in the airplane lavatories?",
        "answer": "False"
    },
    {
        "_id": 4,
        "question": "Can the brace position help increase your chances of survival in a crash?",
        "answer": "True"
    },
    {
        "_id": 5,
        "question": "Are passengers allowed to carry their own life jackets on a plane?",
        "answer": "False"
    },
    {
        "_id": 6,
        "question": "Do commercial airplanes have a system to prevent mid-air collisions?",
        "answer": "True"
    },
    {
        "_id": 7,
        "question": "Is it safe to inflate your life jacket before leaving the aircraft in an emergency water landing?",
        "answer": "False"
    },
    {
        "_id": 8,
        "question": "Should you put on your oxygen mask before assisting others?",
        "answer": "True"
    },
    {
        "_id": 9,
        "question": "Is it mandatory for flight attendants to brief passengers about the emergency exits?",
        "answer": "True"
    },
    {
        "_id": 10,
        "question": "Can opening the overhead bin during turbulence cause injuries?",
        "answer": "True"
    },
    {
        "_id": 11,
        "question": "Is it okay to walk around the cabin when the seatbelt sign is on?",
        "answer": "False"
    },
    {
        "_id": 12,
        "question": "Are the emergency exit doors easy to open by passengers in case of an emergency?",
        "answer": "True"
    },
    {
        "_id": 13,
        "question": "Does the aircraft cabin have a lower level of oxygen than on the ground?",
        "answer": "True"
    },
    {
        "_id": 14,
        "question": "Are all personal items allowed to be kept at your feet during takeoff and landing?",
        "answer": "False"
    },
    {
        "_id": 15,
        "question": "Can you use your mobile phone during the entire flight without any restrictions?",
        "answer": "False"
    },
    {
        "_id": 16,
        "question": "Is it necessary to follow the cabin crew's instructions during an emergency?",
        "answer": "True"
    },
    {
        "_id": 17,
        "question": "Is turbulence a major cause of airplane crashes?",
        "answer": "False"
    },
    {
        "_id": 18,
        "question": "Do life vests provided by the airline have lights to attract attention?",
        "answer": "True"
    },
    {
        "_id": 19,
        "question": "Is it required for all emergency exits to be free of obstructions during flight?",
        "answer": "True"
    },
    {
        "_id": 20,
        "question": "Should you take all personal belongings with you in an evacuation?",
        "answer": "False"
    },
    {
        "_id": 21,
        "question": "Is it possible for passengers to use the emergency slide with high heels?",
        "answer": "False"
    },
    {
        "_id": 22,
        "question": "Are you allowed to consume your own alcohol onboard the aircraft?",
        "answer": "False"
    },
    {
        "_id": 23,
        "question": "Do airplanes recycle air, making it easy to get sick from other passengers?",
        "answer": "False"
    },
    {
        "_id": 24,
        "question": "Is it okay to unfasten your seatbelt when the plane reaches cruising altitude?",
        "answer": "True"
    },
    {
        "_id": 25,
        "question": "Should you wait for an official announcement before using the emergency exit?",
        "answer": "True"
    },
    {
        "_id": 26,
        "question": "Is it required by law to watch the safety demonstration?",
        "answer": "True"
    },
    {
        "_id": 27,
        "question": "Do exit row seats have more legroom but also come with additional responsibilities?",
        "answer": "True"
    },
    {
        "_id": 28,
        "question": "Are the floor lights designed to lead passengers to the exits in case of an emergency?",
        "answer": "True"
    },
    {
        "_id": 29,
        "question": "Is it possible to manually open the doors or emergency exits during flight?",
        "answer": "False"
    },
    {
        "_id": 30,
        "question": "Do overhead masks provide enough oxygen for the entire duration of the flight?",
        "answer": "False"
    },
    {
        "_id": 31,
        "question": "Is it safe to drink water from the airplane bathroom taps?",
        "answer": "False"
    },
    {
        "_id": 32,
        "question": "Can the emergency oxygen masks be used by children and adults alike?",
        "answer": "True"
    },
    {
        "_id": 33,
        "question": "Are pets allowed out of their carriers during the flight?",
        "answer": "False"
    },
    {
        "_id": 34,
        "question": "Should you always locate the nearest emergency exit after boarding?",
        "answer": "True"
    },
    {
        "_id": 35,
        "question": "Is the brace position different for passengers seated in forward vs. rear-facing seats?",
        "answer": "True"
    },
    {
        "_id": 36,
        "question": "In case of a water landing, is it recommended to inflate your life jacket inside the aircraft?",
        "answer": "False"
    },
    {
        "_id": 37,
        "question": "Is it safe to use all kinds of headphones during takeoff and landing?",
        "answer": "False"
    },
    {
        "_id": 38,
        "question": "Are passengers seated at emergency exits required to assist in an evacuation?",
        "answer": "True"
    },
    {
        "_id": 39,
        "question": "Does each passenger seat come equipped with a flotation device?",
        "answer": "True"
    },
    {
        "_id": 40,
        "question": "Is it recommended to keep the window shades open during takeoff and landing for safety?",
        "answer": "True"
    },
    {
        "_id": 41,
        "question": "Must carry-on luggage be stowed securely during takeoff and landing?",
        "answer": "True"
    },
    {
        "_id": 42,
        "question": "Is the airplane floor lighting system also visible in smoke-filled conditions?",
        "answer": "True"
    },
    {
        "_id": 43,
        "question": "Do emergency exits on airplanes open inwards?",
        "answer": "False"
    },
    {
        "_id": 44,
        "question": "Are child passengers provided with special flotation devices on a flight?",
        "answer": "True"
    },
    {
        "_id": 45,
        "question": "Is it permissible to use laptops during all phases of a flight?",
        "answer": "False"
    },
    {
        "_id": 46,
        "question": "Are passengers required to adhere to the airline's electronic device policy?",
        "answer": "True"
    },
    {
        "_id": 47,
        "question": "Do exit rows require passengers to be capable of assisting in an evacuation?",
        "answer": "True"
    },
    {
        "_id": 48,
        "question": "Is it safe to hold infants on your lap without a child restraint during landing?",
        "answer": "False"
    },
    {
        "_id": 49,
        "question": "Are passengers allowed to change seats after the seatbelt sign is turned off?",
        "answer": "True"
    },
    {
        "_id": 50,
        "question": "Can opening the window shade during daytime flights cause glare for pilots?",
        "answer": "False"
    },
    {
        "_id": 51,
        "question": "Should you remove high-heeled shoes before using an evacuation slide?",
        "answer": "True"
    },
    {
        "_id": 52,
        "question": "Is it acceptable to joke about safety threats on an airplane?",
        "answer": "False"
    },
    {
        "_id": 53,
        "question": "Does the 'Fasten Seatbelt' sign turn on automatically at a certain altitude?",
        "answer": "False"
    },
    {
        "_id": 54,
        "question": "Is it necessary to turn off all electronic devices during refueling?",
        "answer": "True"
    },
    {
        "_id": 55,
        "question": "Are there always enough life rafts for all passengers on board a flight?",
        "answer": "True"
    },
    {
        "_id": 56,
        "question": "Is hypoxia a risk in the event of cabin depressurization?",
        "answer": "True"
    },
    {
        "_id": 57,
        "question": "Should cabin baggage be used to prop up one's feet during flight?",
        "answer": "False"
    },

    {
        "_id": 83,
        "question": "Do the overhead bins have a bed inside for your suitcase to sleep on the trip?",
        "answer": "False"
    }

    

]

export default questions;
