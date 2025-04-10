import { getCurrentUser } from '@/lib/actions/auth.action';
import { getFeedbackByInterviewId, getInterviewById } from '@/lib/actions/general.action';
import { redirect } from 'next/navigation';
import React from 'react';
import FeedbackUI from '@/components/FeedBackUI';

const page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();

  const interview = await getInterviewById(id);
  if (!interview) redirect('/');

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  });

  if (!feedback) {
    return (
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold">Feedback</h3>
        <p>You have not taken the interview yet.</p>
      </div>
    );
  }

  return <FeedbackUI interview={interview} feedback={feedback} />;
};

export default page;
