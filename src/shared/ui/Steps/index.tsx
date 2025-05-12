import "./index.scss";

interface StepsProps {
  stepsCount: number;
  currentStep: number;
}

export const Steps = ({ stepsCount, currentStep }: StepsProps) => {
  console.log(currentStep);
  return (
    <div className="steps">
      {Array.from({ length: stepsCount }).map((_, index) => (
        <div key={index} className="steps__step">
          {index}
        </div>
      ))}
    </div>
  );
};
