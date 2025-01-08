import ServerComponent from '../server-component/page';
import ClientComponent from '../client-component/page';
import Header from '../props/page';
import UserProfile from '../multi-props/page';

export default function Page() {
    return (
        <>
            <div>Header and Props</div>
            <Header title="Kob" />

            <div>Server Component</div>
            <ServerComponent />

            <div>Client Component</div>
            <ClientComponent />

            <div>Multi Props</div>
            <UserProfile name="Kob" age={20} email="kob@gmail.com" isAdmin={true} />
        </>
    );
}