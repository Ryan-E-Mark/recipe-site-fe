import { BreakfastSuggested } from "../components/breakfast-suggested/breakfast-suggested";
import { Divider } from "../components/common/divider";
import { DinnerSuggested } from "../components/dinner-suggested/dinner-suggested";
import { LunchSuggested } from "../components/lunch-suggested/lunch-suggested";

export const HomePage = () => {
  return (
    <div className="my-4 h-full">
      <BreakfastSuggested />
      <div className="flex justify-center py-8 mx-8">
      <Divider />
      </div>
      <LunchSuggested />
      <div className="flex justify-center py-8 mx-8">
      <Divider />
      </div>
      <DinnerSuggested />
    </div>
  );
};
