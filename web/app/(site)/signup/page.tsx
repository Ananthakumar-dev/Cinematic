import { SignupForm } from "@/components/site/signup-form";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <SignupForm />
      </div>
    </div>
  );
};

export default page;
