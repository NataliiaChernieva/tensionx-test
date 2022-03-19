import { SchoolList, SchoolListItem, SiteHeader, HeaderList, HeaderListItem, UserIcon } from './Header.styled.jsx';

export default function Header() { 
    return (
        <SiteHeader>
            <SchoolList>
                <SchoolListItem>School1</SchoolListItem>
            </SchoolList>
            <HeaderList>
                <HeaderListItem>Analytics</HeaderListItem>
                <HeaderListItem>Gradebooks</HeaderListItem>
                <HeaderListItem>Tests</HeaderListItem>
                <HeaderListItem>Students</HeaderListItem>
                <HeaderListItem>Teachers</HeaderListItem>
                <HeaderListItem>Archive</HeaderListItem>
            </HeaderList>
            <UserIcon/>
        </SiteHeader>
    )
}