
import stats from "../../data/stats";

function Stats() {
  return (
    <section
      id="stats"
      className="relative py-24 bg-transparent "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-[#65CCB8]
          blur-[160px]
          opacity-10
          pointer-events-none
          -z-10
        "
      ></div>

      <div className="mx-auto max-w-7xl w-[92%]">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-[#2D3748]">
            My Journey in Numbers
          </h2>

          <p className="text-gray-500 mt-3">
            A quick overview of my learning and development journey.
          </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (

            <div
              key={item.id}
              className="
                bg-white/35
                backdrop-blur-xl
                rounded-2xl
                shadow-lg
                border
                border-[#E8F8F3]
                p-8
                text-center
                hover:-translate-y-2
                hover:shadow-[0_15px_35px_rgba(87,186,152,0.18)]
                transition-all
                duration-300
              "
            >

              <h1 className="text-5xl font-bold text-[#57BA98]">
                {item.number}
              </h1>

              <p className="mt-3 text-gray-600">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;

