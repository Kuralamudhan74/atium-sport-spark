import { motion } from "framer-motion";

const assistants = [
  {
    title: "monday sidekick",
    desc: "Just ask. The assistant handles your work for you.",
    bg: "from-blue-500 to-purple-500",
    icon: "✨",
  },
  {
    title: "Project Assistant",
    desc: "Flags risks and automates project processes, in real time.",
    bg: "from-indigo-500 to-pink-500",
    icon: "🧑‍💻",
  },
  {
    title: "Service Agent",
    desc: "Automatically triages and resolves support tickets.",
    bg: "from-pink-500 to-red-500",
    icon: "🎟️",
  },
  {
    title: "Scrum Master",
    desc: "Plans sprints, assigns work, and flags blockers.",
    bg: "from-green-500 to-teal-500",
    icon: "📊",
  },
  {
    title: "Scrum Master",
    desc: "Plans sprints, assigns work, and flags blockers.",
    bg: "from-green-500 to-teal-500",
    icon: "📊",
  },
  {
    title: "Scrum Master",
    desc: "Plans sprints, assigns work, and flags blockers.",
    bg: "from-green-500 to-teal-500",
    icon: "📊",
  },
  {
    title: "Scrum Master",
    desc: "Plans sprints, assigns work, and flags blockers.",
    bg: "from-green-500 to-teal-500",
    icon: "📊",
  },
  {
    title: "Scrum Master",
    desc: "Plans sprints, assigns work, and flags blockers.",
    bg: "from-green-500 to-teal-500",
    icon: "📊",
  }
];

export default function MeetAssistants() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Meet your AI assistants
      </h1>
      <p className="text-gray-400 mb-16 max-w-2xl text-center">
        Describe the job. Your custom AI assistant is created, ready to work
        24/7.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 max-w-7xl">
        {assistants.map((a, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`rounded-2xl p-8 shadow-lg cursor-pointer bg-gradient-to-br ${a.bg}`}
          >
            <div className="text-5xl mb-6">{a.icon}</div>
            <h2 className="text-2xl font-semibold mb-4">{a.title}</h2>
            <p className="text-gray-100">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
