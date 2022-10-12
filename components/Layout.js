import { Fragment, useEffect, useState, cloneElement } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { Dialog, Listbox, Transition } from '@headlessui/react'
import Cookies from 'js-cookie'
import { useThemeContext } from 'context/state'
import { countries } from 'countries-list'

import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import website from 'website'
import Nav from './Nav'
import ImageSlider from './home/imageSlider'
import Content from './secContent'
import Content2 from './Content2'
import VideoSlider from './videoSlider'


export default function Layout(props) {
    const router = useRouter()



    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState('');

    let regions = Object.values(countries)
    regions.sort(compare)
    let suggestions = regions


    const onChange = (e) => {
        const userInput = e.target.value;
        // Filter our suggestions that don't contain the user's input
        const unLinked = suggestions.filter(
            (suggestion) =>
                suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setInput(e.target.value);
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
    };

    const onClick = (e) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
    };

    const onKeyDown = (key) => {
        if (key.keyCode === 13 || key.keyCode === 9) {
            setInput(filteredSuggestions[activeSuggestionIndex])
            setFilteredSuggestions([])
        }
    }

    const SuggestionsListComponent = () => {
        return filteredSuggestions.length ? (
            <ul className='suggestions w-full absolute bg-white rounded h-52 overflow-auto'>
                {filteredSuggestions.map((suggestion, index) => {
                    let className;
                    // Flag the active suggestion with a class
                    if (index === activeSuggestionIndex) {
                        className = '';
                    }
                    return (
                        <li className={'px-3 py-2 ' + className} key={suggestion.name} onClick={onClick}>
                            {suggestion.name}
                        </li>
                    );
                })}
            </ul>
        ) : (
            <div className='no-suggestions'>
                <em>No suggestions, you&apos;re on your own!</em>
            </div>
        );
    };



    const emailPattern = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/

    const [loading, setLoading] = useState(false)
    const [ballotReq, setBallotReq] = useState(null)
    const [ballotResMsg, setBallotResMsg] = useState('hey')
    const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)

    function acceptAge() {
        Cookies.set('age-verified', 'true', { expires: 24 })
        setIsAgeModalOpen(false)
    }
    function rejectAge() {
        router.push('https://google.com/')
    }

    useEffect(() => {
        if (!Cookies.get('age-verified')) {
            setIsAgeModalOpen(true)
        }
    }, [])


    function compare(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }



    // const [isBallotOpen, setIsBallotOpen] = useState(false)
    const [isBallotOpen, setIsBallotOpen] = useThemeContext()

    const products = ['Kinclaith', 'Caperdonich', 'Both']
    const [name, setName] = useState('')
    const [dobDD, setDobDD] = useState('')
    const [dobMM, setDobMM] = useState('')
    const [dobYYYY, setDdobYYYY] = useState('')
    const [email, setEmail] = useState('')
    const [bottles, setBottles] = useState(0)
    const [bottlesC, setBottlesC] = useState(0)
    const [comment, setComment] = useState(' ')
    const [selectedCountry, setSelectedCountry] = useState(regions[0].name)
    const [selectedProduct, setSelectedProduct] = useState(products[0])

    function closeBallotModal() {
        setIsBallotOpen(false)
        setName('')
        setEmail('')
        setDobDD('')
        setDobMM('')
        setDdobYYYY('')
        setComment('')
        setBallotReq(null)
    }
    function openBallotModal() {
        setIsBallotOpen(true)
    }
    const handleBallotSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        const data = {
            name: name,
            product: selectedProduct,
            country: input,
            email: email,
            comments: comment,
            number_of_bottles: bottles ? bottles : 0,
            number_of_bottlesC: bottlesC ? bottlesC : 0,
            dob: dobYYYY + '-' + dobMM.padStart(2, '0') + '-' + dobDD.padStart(2, '0'),
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = 'https://therarestprodapi.dtstage.com/api/product/inquiry';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options)
        const result = await response.json()
        if (result.success) {
            setLoading(false)
            setBallotResMsg(result.message)
            setBallotReq(true)
            setName('')
            setEmail('')
            setDobDD('')
            setDobMM('')
            setDdobYYYY('')
            setComment('')
        } else {
            setLoading(false)
            setBallotResMsg(result.message)
            setBallotReq(false)
        }
    }


    return (
        <>

            <Header openBallotModal={openBallotModal} />
            <main id='main' >{cloneElement(props.children, { openBallotModal: openBallotModal })}</main>
            {/* <Footer /> */}
        </>
    )
}
